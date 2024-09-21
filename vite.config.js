// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Correctly points '@' to '/src'
      'components': path.resolve(__dirname, 'src/shadecn'), // Points 'components' to '/src/shadecn'
      'lib': path.resolve(__dirname, 'src/lib'), // Correctly points 'lib' to '/src/lib'
    },
  },
});
