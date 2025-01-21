import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.BACKEND_URL': JSON.stringify('https://content-analyzer-production.up.railway.app/')
  }
})