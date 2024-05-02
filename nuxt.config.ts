// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image', '@pinia/nuxt', 
  ['@nuxtjs/google-fonts', {
    families: {
      Inter: '200..900'
    }
  }]],
  typescript: {
    typeCheck: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css']
})