
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      mode:'',
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Button': './src/components/Button'
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