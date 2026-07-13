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
 *
 * Degrades gracefully: with no DATABASE_URL the post endpoints return 503 and
 * the public site falls back to its built-in posts; with no Cloudinary the
 * uploads go to local disk (fine for development).
 */
import 'dotenv/config'; // load .env locally (no-op on Render, which sets real env vars)
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { v2 as cloudinary } from 'cloudinary';
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
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true, // reflect request origin by default
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
  res.json({ ok: true, db: Boolean(pool), cloudinary: useCloudinary, loginEnabled })
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
