import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GalleryWebsite/',      // ensure all asset URLs are /GalleryWebsite/…
  plugins: [react()],
  build: {
    outDir: 'docs'               // ← build into docs/ instead of dist/
  }
});