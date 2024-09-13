import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Correctly points '@' to '/src'
      'components': '/src/shadecn', // Correctly points 'components' to '/src/shadecn'
    },
  },
})
