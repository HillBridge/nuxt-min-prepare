export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ssr: true,
  runtimeConfig: {
    // 只在服务器端可用的私有键 
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api',
    }
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/content'],
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     httpOnly: true,
  //     maxAge: 3600*2,
  //   },
  //   storage: 'cookies',
  // }
})