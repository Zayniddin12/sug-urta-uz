// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  plugins: ['~/plugins/chartjs.ts'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'uz',
      },
      title: 'sugurta',
      description: 'sugurta description',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://mukofotlar.reestri.com' },
      ],
      meta: [
        {
          property: 'og:title',
          content: 'description',
        },
        {
          name: 'description',
          content: 'description',
        },
        {
          property: 'og:description',
          content: 'description',
        },
        {
          property: 'og:image',
          content: '/OgImage.svg',
        },
        { property: 'og:url', content: 'https://mukofotlar.reestri.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'description',
        },
        {
          name: 'twitter:description',
          content: 'description',
        },
        {
          name: 'twitter:image',
          content: 'https://mukofotlar.reestri.com/path/to/image.jpg',
        },
      ],
    },
  },

  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/tailwind.css',
    '~/assets/icomoon/style.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxtjs/i18n', //   Enable if your Yandex Metrica with real credentials
    // [
    //   'yandex-metrika-module-nuxt3',
    //   {
    //     id: 0000000,
    //     webvisor: true,
    //   },
    // ],
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
      'nuxt-simple-robots',
      'nuxt-simple-sitemap',
    ],
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'ru', language: 'ru-RU', file: 'ru.json' },
      { code: 'uz', language: 'uz-UZ', file: 'uz.json' },
      { code: 'uzc', language: 'uzc-UZC', file: 'uzc.json' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'locale',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'uz',
    },
    defaultLocale: 'uz',
    strategy: 'prefix',
    customLinkComponent: 'NuxtLinkLocale',
  },
  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  gtag: {
    id: process.env.GOOGLE_TAG_ID,
  },

  compatibilityDate: '2025-04-05',
})
