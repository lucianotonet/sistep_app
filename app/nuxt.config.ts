import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
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
})