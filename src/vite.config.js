import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'termos.html',  // arquivo na raiz do projeto
          dest: '.'             // destino dentro de dist
        }
      ]
    })
  ],
  base: '/TrindaBoost/', // se for GitHub Pages
})
