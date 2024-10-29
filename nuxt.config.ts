// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'usebootstrap', "nuxt-security", '@nuxt/scripts'],
  ssr: true,
  app: {
    head: {
      title: 'Editing Film Music',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Website for the international conference Editing Film Music, organised by the Erich Wolfgang Korngold Werkausgabe.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    baseURL: '/website_editing-film-music/',
  },
  security: {
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false, // Disables CSP hash support for styles in SSG mode (recommended)
      exportToPresets: true // Export security headers to Nitro presets
    },
    sri: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'strict-dynamic'",
        ]
      }
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
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
      },
      {
        code: "de",
        language: "de-DE",
        name: "Deutsch",
      },
    ],
    defaultLocale: "de",
  },
  robots: { robotsTxt: false }
})