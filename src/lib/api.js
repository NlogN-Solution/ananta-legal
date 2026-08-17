/**
 * Base URL of the backend API.
 *
 * Same-origin deploys (Render single service, or local dev via the Vite
 * proxy) leave VITE_API_URL unset and just call "/api/...". If the frontend
 * is built separately (e.g. uploaded as a static dist/ to cPanel) while the
 * backend runs elsewhere (e.g. Render), set VITE_API_URL to that backend's
 * origin (no trailing slash) before running `npm run build`.
 */
export const API_BASE = (import.meta.env.VITE_API_URL || 'https://ananta-legal-api.onrender.com').replace(/\/$/, '');

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

export function apiFetch(path, opts = {}) {
  return fetch(apiUrl(path), { credentials: 'include', ...opts });
}
