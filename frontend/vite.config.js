import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',  // ✅ Add this for Tailwind CSS
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // backend
        changeOrigin: true,
      },
    },
  },
});
