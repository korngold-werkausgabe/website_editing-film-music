// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'usebootstrap'],
  ssr: true,
  app:{
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
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