import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GalleryWebsite/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
