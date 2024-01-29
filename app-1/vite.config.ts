import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    port: 5001,
  },
  plugins: [
      react(),
      federation({
        name: 'remote-app', // name of the fed group...
        filename: 'remoteEntry.js', // default file name
        // Modules to expose
        exposes: { 
          './Button': './src/components/Button.jsx',
        },
        shared: ['react','react-dom'] // libs/deps to be shared
      })
  ],
  build: {
    target: 'esnext' // needed to final build
  },
})
