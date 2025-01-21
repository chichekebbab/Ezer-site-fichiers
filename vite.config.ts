import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import imagePresets from 'vite-plugin-image-presets';

const sharpPreset = imagePresets({
  webp: {
    // @ts-ignore - Typings mismatch with plugin version
    encodeOptions: {
      quality: 80,
      lossless: false,
      speed: 4,
    }
  },
});

export default defineConfig({
  plugins: [
    react(),
    sharpPreset,
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
