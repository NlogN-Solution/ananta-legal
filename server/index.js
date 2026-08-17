/**
 * Ananta Legal — backend API.
 *
 *   • Blog posts stored in PostgreSQL (CRUD)
 *   • Image upload for the editor → Cloudinary (prod) or local disk (dev)
 *   • Admin login with persistent sessions (so you stay signed in)
 *   • Optionally serves the built React app (single Render service)
 *
 * Environment variables (add yours on Render):
 *   DATABASE_URL          PostgreSQL connection string (also stores sessions)
 *   SESSION_SECRET        random string used to sign the session cookie
 *   ADMIN_USER            admin username        (default: "admin")
 *   ADMIN_PASSWORD        admin password        (login is disabled until set)
 *   CLOUDINARY_URL        cloudinary://<key>:<secret>@<cloud>  (image storage)
 *   SERVE_CLIENT          "true" to serve the built dist/ from this server
 *   CLIENT_ORIGIN         allowed browser origin if frontend is a separate site
 *   COOKIE_CROSS_SITE     "true" if frontend and backend are on different domains
 *   API_PORT              port (Render sets PORT; we read both)
 *   SMTP_HOST/PORT/USER/PASS  mail server used to send enquiry-form emails
 *   MAIL_TO                where enquiry emails are delivered (default: anantalegal9@gmail.com)
 *   MAIL_FROM              "From" address for outgoing mail (defaults to SMTP_USER)
 *
 * Degrades gracefully: with no DATABASE_URL the post endpoints return 503 and
 * the public site falls back to its built-in posts; with no Cloudinary the
 * uploads go to local disk (fine for development); with no SMTP_* set the
 * contact endpoint returns 503 instead of silently dropping enquiries.
 */
import 'dotenv/config'; // load .env locally (no-op on Render, which sets real env vars)
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { v2 as cloudinary } from 'cloudinary';
import nodemailer from 'nodemailer';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PORT = process.env.PORT || process.env.API_PORT || 8787;
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(ROOT, 'uploads');
const DATABASE_URL = process.env.DATABASE_URL || '';
const IS_PROD = process.env.NODE_ENV === 'production';
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

/* ------------------------------------------------------------------ db ---- */
let pool = null;
if (DATABASE_URL) {
  const isLocal = /localhost|127\.0\.0\.1/.test(DATABASE_URL);
  pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: isLocal ? false : { rejectUnauthorized: false },
  });
  pool.on('error', (e) => console.error('[db] pool error:', e.message));
} else {
  console.warn('[db] DATABASE_URL not set — post endpoints return 503 until you add it.');
}

async function ensureSchema() {
  if (!pool) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id          SERIAL PRIMARY KEY,
      slug        TEXT UNIQUE NOT NULL,
      title       TEXT NOT NULL,
      excerpt     TEXT NOT NULL DEFAULT '',
      category    TEXT NOT NULL DEFAULT 'Article',
      cover_image TEXT,
      read_time   TEXT NOT NULL DEFAULT '',
      content     TEXT NOT NULL DEFAULT '',
      published   BOOLEAN NOT NULL DEFAULT TRUE,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('[db] schema ready');
}

function requireDb(res) {
  if (!pool) {
    res.status(503).json({ error: 'Database not configured. Set DATABASE_URL and restart.' });
    return false;
  }
  return true;
}

/* ----------------------------------------------------------- cloudinary ---- */
let useCloudinary = false;
if (process.env.CLOUDINARY_URL) {
  cloudinary.config({ secure: true }); // reads CLOUDINARY_URL from env
  useCloudinary = Boolean(cloudinary.config().cloud_name);
} else if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  useCloudinary = true;
}
console.log(`[storage] images -> ${useCloudinary ? 'Cloudinary' : 'local disk (' + UPLOAD_DIR + ')'}`);

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'ananta-blog', resource_type: 'image' },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    );
    stream.end(buffer);
  });
}

/* ----------------------------------------------------------------- mail ---- */
const MAIL_TO = process.env.MAIL_TO || 'anantalegal9@gmail.com';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER || MAIL_TO;

// Brevo's HTTPS API (port 443) — preferred when BREVO_API_KEY is set, since
// some hosts (Render included) block/throttle raw outbound SMTP ports, which
// makes plain SMTP relays hang and time out regardless of credentials.
const BREVO_API_KEY = process.env.BREVO_API_KEY || '';

let mailer = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  mailer = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000, // fail fast instead of hanging when SMTP rejects/is unreachable
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
}

const mailEnabled = Boolean(BREVO_API_KEY || mailer);
if (!mailEnabled) {
  console.warn('[mail] Set BREVO_API_KEY (preferred) or SMTP_HOST/SMTP_USER/SMTP_PASS — /api/contact returns 503 until configured.');
}
console.log(
  `[mail] enquiries -> ${BREVO_API_KEY ? 'Brevo API (HTTPS)' : mailer ? `SMTP (${process.env.SMTP_HOST})` : 'disabled'} -> ${MAIL_TO}`
);

async function sendMail({ to, replyTo, subject, text, html }) {
  if (BREVO_API_KEY) {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Ananta Legal Website', email: MAIL_FROM },
        to: [{ email: to }],
        replyTo: { email: replyTo },
        subject,
        textContent: text,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Brevo API ${res.status}: ${body}`);
    }
    return;
  }
  await mailer.sendMail({ from: `"Ananta Legal Website" <${MAIL_FROM}>`, to, replyTo, subject, text, html });
}

// Tiny in-memory rate limit: max 5 submissions per 10 minutes per IP.
// Good enough for a single-instance deploy; resets on restart.
const contactHits = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const hits = (contactHits.get(ip) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  contactHits.set(ip, hits);
  return hits.length > 5;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* -------------------------------------------------------------- helpers ---- */
function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-|-$/g, '');
}

async function uniqueSlug(base) {
  const root = base || `post-${Date.now()}`;
  let candidate = root;
  for (let n = 2; n < 1000; n++) {
    const { rows } = await pool.query('SELECT 1 FROM posts WHERE slug = $1', [candidate]);
    if (rows.length === 0) return candidate;
    candidate = `${root}-${n}`;
  }
  return `${root}-${Date.now()}`;
}

function estimateReadTime(html) {
  const words = String(html).replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

/* ----------------------------------------------------------------- app ---- */
const app = express();
app.set('trust proxy', 1); // Render terminates TLS at a proxy

// CLIENT_ORIGIN may be a single origin or a comma-separated list (e.g. the
// production site + http://localhost:5173 for local dev against this API).
// Leave CLIENT_ORIGIN unset to reflect any origin (fine when there's no
// cross-site session cookie in play, i.e. COOKIE_CROSS_SITE isn't needed).
const allowedOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true); // curl, server-to-server, etc.
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use('/uploads', express.static(UPLOAD_DIR, { maxAge: '7d' }));

/* --- sessions (persisted in Postgres when available) --------------------- */
const PgSession = connectPgSimple(session);
app.use(
  session({
    name: 'ananta.sid',
    secret: process.env.SESSION_SECRET || 'dev-insecure-secret-change-me',
    resave: false,
    saveUninitialized: false,
    rolling: true, // refresh expiry on activity so admins stay logged in
    store: pool
      ? new PgSession({ pool, tableName: 'session', createTableIfMissing: true })
      : undefined, // MemoryStore in dev (resets on restart)
    cookie: {
      httpOnly: true,
      sameSite: process.env.COOKIE_CROSS_SITE === 'true' ? 'none' : 'lax',
      secure: IS_PROD,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    },
  })
);

/* --- auth ----------------------------------------------------------------- */
const loginEnabled = Boolean(ADMIN_PASSWORD);

function safeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

function requireAuth(req, res, next) {
  if (req.session?.admin) return next();
  res.status(401).json({ error: 'Not authenticated.' });
}

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, db: Boolean(pool), cloudinary: useCloudinary, loginEnabled, mail: mailEnabled })
);

app.get('/api/me', (req, res) =>
  res.json({ authenticated: Boolean(req.session?.admin), loginEnabled })
);

app.post('/api/login', (req, res) => {
  if (!loginEnabled) {
    return res.status(503).json({ error: 'Admin login is not configured (set ADMIN_PASSWORD).' });
  }
  const { username, password } = req.body || {};
  const ok = safeEqual(username || '', ADMIN_USER) && safeEqual(password || '', ADMIN_PASSWORD);
  if (!ok) return res.status(401).json({ error: 'Invalid username or password.' });
  req.session.admin = true;
  res.json({ ok: true });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

/* --- contact / enquiry form ------------------------------------------------ */
app.post('/api/contact', async (req, res) => {
  if (!mailEnabled) {
    return res.status(503).json({ error: 'Mail is not configured. Set BREVO_API_KEY (or SMTP_HOST/SMTP_USER/SMTP_PASS) and restart.' });
  }

  // Honeypot: real visitors never fill this hidden field; bots usually do.
  if (req.body?.website) return res.json({ ok: true });

  const ip = req.ip || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, company = '', service = '', message } = req.body || {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    await sendMail({
      to: MAIL_TO,
      replyTo: email.trim(),
      subject: `New enquiry — ${name.trim()}${service ? ` (${service})` : ''}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        company ? `Company: ${company.trim()}` : null,
        service ? `Service: ${service.trim()}` : null,
        '',
        message.trim(),
      ].filter(Boolean).join('\n'),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company.trim())}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service.trim())}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
      `,
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('[contact]', e.message);
    res.status(502).json({ error: 'Failed to send your message. Please try again or email us directly.' });
  }
});

/* --- image upload (admin only) ------------------------------------------- */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) =>
    cb(null, /^image\/(png|jpe?g|gif|webp|svg\+xml)$/.test(file.mimetype)),
});

app.post('/api/upload', requireAuth, upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded.' });
  try {
    if (useCloudinary) {
      const url = await uploadToCloudinary(req.file.buffer);
      return res.json({ location: url });
    }
    const ext = (path.extname(req.file.originalname) || '.png').toLowerCase();
    const name = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${ext}`;
    fs.writeFileSync(path.join(UPLOAD_DIR, name), req.file.buffer);
    res.json({ location: `/uploads/${name}` });
  } catch (e) {
    console.error('[upload]', e.message);
    res.status(500).json({ error: 'Image upload failed.' });
  }
});

/* --- posts ---------------------------------------------------------------- */
app.get('/api/posts', async (_req, res) => {
  if (!requireDb(res)) return;
  try {
    const { rows } = await pool.query(
      `SELECT id, slug, title, excerpt, category, cover_image, read_time, created_at
         FROM posts WHERE published = TRUE ORDER BY created_at DESC`
    );
    res.json(rows);
  } catch (e) {
    console.error('[posts:list]', e.message);
    res.status(500).json({ error: 'Failed to load posts.' });
  }
});

app.get('/api/posts/:slug', async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const { rows } = await pool.query('SELECT * FROM posts WHERE slug = $1', [req.params.slug]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found.' });
    res.json(rows[0]);
  } catch (e) {
    console.error('[posts:get]', e.message);
    res.status(500).json({ error: 'Failed to load post.' });
  }
});

app.post('/api/posts', requireAuth, async (req, res) => {
  if (!requireDb(res)) return;
  const { title, excerpt = '', category = 'Article', content = '', cover_image = null } =
    req.body || {};
  if (!title || !title.trim()) return res.status(400).json({ error: 'Title is required.' });
  try {
    const slug = await uniqueSlug(slugify(title));
    const read_time = req.body.read_time || estimateReadTime(content);
    const { rows } = await pool.query(
      `INSERT INTO posts (slug, title, excerpt, category, cover_image, read_time, content)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [slug, title.trim(), excerpt, category, cover_image, read_time, content]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error('[posts:create]', e.message);
    res.status(500).json({ error: 'Failed to create post.' });
  }
});

app.put('/api/posts/:id', requireAuth, async (req, res) => {
  if (!requireDb(res)) return;
  const { title, excerpt, category, content, cover_image, published } = req.body || {};
  try {
    const read_time =
      req.body.read_time || (content != null ? estimateReadTime(content) : undefined);
    const { rows } = await pool.query(
      `UPDATE posts SET
         title = COALESCE($2, title),
         excerpt = COALESCE($3, excerpt),
         category = COALESCE($4, category),
         content = COALESCE($5, content),
         cover_image = COALESCE($6, cover_image),
         read_time = COALESCE($7, read_time),
         published = COALESCE($8, published),
         updated_at = now()
       WHERE id = $1 RETURNING *`,
      [req.params.id, title, excerpt, category, content, cover_image, read_time, published]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Not found.' });
    res.json(rows[0]);
  } catch (e) {
    console.error('[posts:update]', e.message);
    res.status(500).json({ error: 'Failed to update post.' });
  }
});

app.delete('/api/posts/:id', requireAuth, async (req, res) => {
  if (!requireDb(res)) return;
  try {
    const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
    if (rowCount === 0) return res.status(404).json({ error: 'Not found.' });
    res.json({ ok: true });
  } catch (e) {
    console.error('[posts:delete]', e.message);
    res.status(500).json({ error: 'Failed to delete post.' });
  }
});

/* --- optionally serve the built client (single-service deploy) ----------- */
const DIST = path.join(ROOT, 'dist');
if (process.env.SERVE_CLIENT === 'true' && fs.existsSync(DIST)) {
  app.use(express.static(DIST));
  // SPA fallback for any non-API GET (Express 5: avoid string '*' routes).
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api') && !req.path.startsWith('/uploads')) {
      return res.sendFile(path.join(DIST, 'index.html'));
    }
    next();
  });
  console.log('[client] serving built app from dist/');
}

ensureSchema()
  .catch((e) => console.error('[db] schema init failed:', e.message))
  .finally(() => {
    app.listen(PORT, () => {
      console.log(
        `Ananta API on :${PORT}  (db:${pool ? 'on' : 'off'} · images:${useCloudinary ? 'cloudinary' : 'disk'} · login:${loginEnabled ? 'on' : 'off'})`
      );
    });
  });
