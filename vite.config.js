import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/TrindaBoost/'
    : '/',
  server: {
    port: 5173,
    open: true
  }
}))
