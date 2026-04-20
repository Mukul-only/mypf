import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three': ['three', 'three-stdlib'],
          'vendor-react': ['react', 'react-dom'],
          'vendor-gsap': ['gsap', 'gsap-trial'],
          'vendor-r3f': ['@react-three/fiber', '@react-three/drei'],
          'vendor-physics': ['@react-three/rapier', '@react-three/postprocessing'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'react', 'react-dom'],
    exclude: ['@react-three/rapier'],
  },
});
