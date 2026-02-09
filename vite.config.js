import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/TrindaBoost/' : '/',
  server: {
    port: 5173,
    open: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'termos.html', // arquivo na raiz do projeto
          dest: '.'           // copia para a raiz do dist
        }
      ]
    })
  ]
}))
