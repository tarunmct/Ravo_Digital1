import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory
    outDir: 'dist',
    // Generate sourcemaps for production debugging (optional, remove if not needed)
    sourcemap: false,
    // Minification
    minify: 'terser',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
  // Server configuration
  server: {
    port: 5173,
    open: true,
  },
  // Preview configuration
  preview: {
    port: 4173,
  },
})
