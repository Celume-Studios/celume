import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Expose to all network interfaces
    strictPort: true, // Fail if port 3000 is not available
    hmr: {
      clientPort: 3000, // Ensure HMR works with Ngrok
      host: 'localhost'
    },
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ngrok-free.app', // Allow all ngrok free domains
      '.ngrok.io', // Allow all ngrok domains
    ]
  },
  preview: {
    port: 3000,
    host: true
  }
})
