import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// API requests (/api) and uploaded images (/uploads) are proxied to the
// Express backend during development. Run both with `npm run dev:all`.
const API_TARGET = process.env.VITE_API_TARGET || 'http://localhost:8787'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: API_TARGET, changeOrigin: true },
      '/uploads': { target: API_TARGET, changeOrigin: true },
    },
  },
})
