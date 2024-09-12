import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'SISTEP - Sistema de Testes Psicológicos',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Sistema de Testes Psicológicos online' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Adicionando links para as fontes
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  compatibilityDate: '2024-09-11',
  ssr: true,
  devtools: {
    enabled: false,
    timeline: {
      enabled: false
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@pinia/nuxt'],  
  sourcemap: {
    server: true,
    client: true
  },
  build: {
    transpile: ['html5-qrcode']
  },
  vite: {
    optimizeDeps: {
      include: ['devalue']
    }
  },
  hooks: {
    // Hooks podem ser adicionados aqui conforme necessário
  }
})