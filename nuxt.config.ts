// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'usebootstrap'],
  ssr: false,
  app:{
    head: {
      title: 'Editing Film Music',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Website for the international conference Editing Film Music, organised by the Erich Wolfgang Korngold Werkausgabe.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
    baseURL: 'https://korngold-werkausgabe.github.io/editing-film-music/',
  },
  css: ["~/assets/custom.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;'
        }
      }
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
      },
    ],
    defaultLocale: "de",
  },
})