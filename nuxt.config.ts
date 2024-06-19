// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     httpOnly: true,
  //     maxAge: 3600*2, 
  //   },
  //   storage: 'cookies',
  // },
})
