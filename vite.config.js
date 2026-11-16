import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Support both GitHub Pages (/ai-portfolio/) and root deployments (Vercel)
export default defineConfig({
  base: process.env.VERCEL ? '/' : (process.env.VITE_BASE || '/ai-portfolio/'),
  plugins: [
    react(),
    tailwindcss(),
  ],
})
