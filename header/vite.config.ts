

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        './Header': './src/components/Header'
      },
      shared: ['react','react-dom'],
    }),
  ],
  server:{
    open:true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})