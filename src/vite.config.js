import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/', // raiz do Netlify
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
})
