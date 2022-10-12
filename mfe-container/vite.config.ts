import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'CONTAINER',
      filename: 'remoteEntry.js',
      remotes:{
          some: 'remote_some'
      },
      shared: ['react']
    })
  ]
})
