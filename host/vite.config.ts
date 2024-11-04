
import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        remoteButton: 'http://localhost:5001/assets/remoteEntry.js',
        remoteHeader:  'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react','react-dom']
    })
  ],
  server:{
    open:true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})