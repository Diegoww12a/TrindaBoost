import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // raiz para Netlify
  server: {
    port: 5173,
    open: true
  }
})
