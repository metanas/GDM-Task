export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GDM-Fifa-Card',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss'],

  layout: '~/layouts/default',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity/module',
  ],

  sanity: {
    projectId: '21fy9g0s',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
