// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt', '@vee-validate/nuxt'],

  pinia: {
    autoImports: ['defineStore'],
  },
  imports: {
    dirs: ['stores'],
  },

  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: 'Ui',
    },
  ],
})
