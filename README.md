# Ananta Legal React Application

A complete React application created from the original single-page HTML, expanded into a professional, responsive multi-page layout using React Router.

## Features & Implementation
1. **Homepage**: Features the original custom styles, the animated hero title, rotating SVG seal, the signature "Clause Sticker", marquee, services, process timeline, testimonials, FAQ accordions, and CTA.
2. **About Us**: Features a professional biography for Sanskriti, credentials cards, and core values.
3. **Practice Areas**: A dedicated grid with cards mapping to 6 legal service pages.
4. **Practice Details**: Dynamically renders individual service details based on the slug.
5. **Contact Page**: Features contact info cards, a Consultation Request form, and an embedded Google Map.
6. **Lead Magnet**: Offers a downloadable compliance guide PDF to collect user contacts.
7. **Blog**: Lists legal insights to boost SEO and showcase expertise.
8. **Our Story**: Documents the "Origin Story", "Why specifically for entrepreneurs?", and "The motivation".

## Installation Instructions

1. Navigate to the project folder:
   ```bash
   cd react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Backend (chat, blog publishing, map, contact email)

Four features were added:

- **Support chat widget** — bottom-right on every page. Pure frontend, **no AI**: it
  keyword-matches the visitor's question against a built-in FAQ set (bilingual EN/ने)
  and replies with canned answers, nudging to "Book a free call". Edit the answers in
  `src/i18n/translations.js` under `chat.faqs`.
- **Map** — the Contact page embeds an OpenStreetMap/Google map (no API key needed).
- **Blog publishing system** — a rich-text editor (TinyMCE, self-hosted, no API key) at
  `/blog/new` and `/blog/edit/:slug`, with image upload. Posts are stored in PostgreSQL
  and shown at `/blog` and `/blog/:slug`. The editor is **admin-only** (login + session).
- **Contact form → email** — `POST /api/contact` sends the Contact page's Consultation
  Request form as an email to `MAIL_TO` (defaults to `anantalegal9@gmail.com`), with the
  visitor's address set as `Reply-To` so you can just hit reply. Includes a honeypot
  field and a basic per-IP rate limit. Sends via **Brevo's HTTPS API** when
  `BREVO_API_KEY` is set (recommended — see below), falling back to plain SMTP
  (`SMTP_HOST`/`SMTP_USER`/`SMTP_PASS`) otherwise. Degrades to a 503 with a clear
  message until one of those is configured.

### Run it locally

```bash
cp .env.example .env      # then fill in the values (see below)
npm run dev:all           # runs Vite (web) + the API server together
```

`dev:all` starts the Vite dev server and the Express API; Vite proxies `/api` and
`/uploads` to the API automatically (see `vite.config.js`).

### Environment variables (`.env`)

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (stores posts **and** sessions). |
| `SESSION_SECRET` | Random string signing the session cookie. |
| `ADMIN_USER` / `ADMIN_PASSWORD` | Editor login. Login is disabled until `ADMIN_PASSWORD` is set. |
| `CLOUDINARY_URL` | Cloudinary credentials for blog images. Falls back to local disk if unset. |
| `SERVE_CLIENT` | `true` → the API server also serves the built `dist/` (single service). |
| `CLIENT_ORIGIN` / `COOKIE_CROSS_SITE` | Only for a *separate* frontend deployment. `CLIENT_ORIGIN` accepts a comma-separated list, e.g. `https://ananta-legal.com,http://localhost:5173` to allow local dev too. |
| `BREVO_API_KEY` | **Recommended** way to send contact-form email — Brevo's HTTPS API (Brevo → SMTP & API → API Keys), avoids SMTP ports that hosts like Render can block. |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Fallback mail transport, only used when `BREVO_API_KEY` is unset. |
| `MAIL_TO` | Inbox that receives enquiries. Defaults to `anantalegal9@gmail.com`. |
| `MAIL_FROM` | "From" address on outgoing mail. Must be on a domain authenticated with your mail provider (SPF/DKIM) — see "Blog image storage" section's sibling note in `.env.example`. |
| `VITE_API_URL` | **Frontend build-time var.** Set only when the frontend is built and hosted separately from the API (see below) — the API's public URL, no trailing slash. |

The backend degrades gracefully: with no `DATABASE_URL` the public site still works and
falls back to the three built-in featured posts.

## Deploying on Render

**Q: same codebase or a separate service?** Keep it in this one repo. The simplest,
most reliable setup is a **single Render Web Service** where the Express server also
serves the built React app — same origin means the session cookie "just works".

1. Create a **PostgreSQL** instance on Render; copy its *Internal Database URL*.
2. Create a **Web Service** from this repo:
   - **Build command:** `npm install && npm run build`
   - **Start command:** `npm run server`
   - **Environment:** `DATABASE_URL`, `SESSION_SECRET`, `ADMIN_USER`, `ADMIN_PASSWORD`,
     `CLOUDINARY_URL`, `SERVE_CLIENT=true`, `NODE_ENV=production`.
   Render injects `PORT`; the server reads it. The `posts` and `session` tables are
   created automatically on first boot.

> Prefer a separate Static Site + Web Service? That also works, but you must set
> `CLIENT_ORIGIN` to the static site's URL and `COOKIE_CROSS_SITE=true` so the
> cross-domain session cookie is allowed. The single-service option above avoids all
> of that.

## Frontend on cPanel + backend on Render (split deployment)

This is the setup if you're already uploading `dist/` to cPanel and want the API on
its own host. **Node.js apps are fully supported on Render on any plan** — it's a
dedicated Node/Python/etc. app host, unlike cPanel where SSH/terminal/Node access is
usually gated behind the "unlimited" tier. Nothing in this repo needs cPanel's shell.

1. **Deploy the backend to Render** as a Web Service pointing at this repo:
   - **Build command:** `npm install`
   - **Start command:** `npm run server`
   - **Environment:** `DATABASE_URL`, `SESSION_SECRET`, `ADMIN_USER`, `ADMIN_PASSWORD`,
     `CLOUDINARY_URL`, `BREVO_API_KEY`, `MAIL_FROM`, `MAIL_TO`,
     `NODE_ENV=production`, `SERVE_CLIENT=false` (or unset),
     `CLIENT_ORIGIN=https://your-cpanel-domain.com`, `COOKIE_CROSS_SITE=true`.
   - Note the resulting URL, e.g. `https://ananta-legal-api.onrender.com`.
2. **Build the frontend for cPanel** with that URL baked in:
   ```bash
   VITE_API_URL=https://ananta-legal-api.onrender.com npm run build
   ```
   (or add `VITE_API_URL=...` to a local `.env` before building — Vite reads it at
   build time only). Upload the resulting `dist/` contents to cPanel as before.
3. Every `fetch` in the app (contact form, blog list/post, admin login/editor) now
   targets the Render API instead of the cPanel domain — see `src/lib/api.js`.

Blog admin sessions use a cross-site cookie in this setup (`COOKIE_CROSS_SITE=true`),
which requires HTTPS on both sides — Render and cPanel both give you that by default.

## Blog image storage — use Cloudinary

**Render's filesystem is ephemeral** — anything written to local `uploads/` is erased on
every deploy/restart. So in production you must store blog images off-box. This project
integrates **Cloudinary**:

1. Create a free Cloudinary account → Dashboard → *Account Details*.
2. Copy the `CLOUDINARY_URL` (`cloudinary://API_KEY:API_SECRET@CLOUD_NAME`).
3. Set it as an env var on Render.

When `CLOUDINARY_URL` is present, uploaded images go to Cloudinary and posts store the
returned `https://res.cloudinary.com/...` URL. When it's absent (local dev), images are
written to `uploads/` instead.
