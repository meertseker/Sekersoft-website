import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@headlessui/react'],
        },
      },
    },
    // Source maps disabled for production
    sourcemap: false,
    // Minify with esbuild (Vite's default, faster than terser)
    minify: 'esbuild',
    // Drop console.log and debugger in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Preview server config
  preview: {
    port: 4173,
    strictPort: true,
  },
  // Dev server config
  server: {
    port: 5173,
    strictPort: true,
  },
})

