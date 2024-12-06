// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/anotarRotinas/',  // Substitua 'nome-do-repositorio' pelo nome real do seu repositório
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // Mudança aqui

// Configuração do Vite
export default defineConfig({
  base: '/anotarRotinas/',  // Substitua pelo nome do seu repositório
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Registra o PWA automaticamente
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Seu Projeto React',
        short_name: 'ReactPWA',
        description: 'Descrição do seu projeto',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/',
        display: 'standalone',  // Exibe o app sem a interface do navegador
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})


