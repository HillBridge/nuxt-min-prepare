// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ssr: true,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/content'],
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     httpOnly: true,
  //     maxAge: 3600*2, 
  //   },
  //   storage: 'cookies',
  // },
})