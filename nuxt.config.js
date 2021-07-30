import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'select-none bg-black',
    },
    title: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Broadcast Collective',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Broadcast Collective',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://mortelenta.org/share-mortelenta.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://mortelenta.org' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Broadcast Collective',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://mortelenta.org/share-mortelenta.png',
      },
    ],
    link: [{ rel: 'icon', href: '/favicon.svg' }],
  },
  loading: {
    color: '#000000',
    failedColor: '#000000',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
  tailwindcss: {
    exposeConfig: true,
  },
}
