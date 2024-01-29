import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  }, 
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remoteApp: "http://127.0.0.1:5001/assets/remoteEntry.js",
        remoteApp2: "http://127.0.0.1:5002/assets/remoteEntry.js",
        },
      shared: ['react', 'react-dom']
    })
  ],
})
