import Aura from "@primevue/themes/aura";
// import { MyAura } from '@/utils/presets/my-aura'

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
  },
  ssr: true,
  // sourcemap: false,
  sourcemap: {
    server: false,
    client: false,
  },
  runtimeConfig: {
    // 只在服务器端可用的私有键
    session: {
      name: "nuxt-session",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    },
    // apiSecret: process.env.NUXT_API_KEY,
    apiBase: process.env.VITE_BASE_URL,
    // public中的键也可以在客户端使用
    public: {
      apiBase: process.env.VITE_BASE_URL,
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/content",
    "nuxt-auth-utils",
    "nuxt-lodash",
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  primevue: {
    components: {
      prefix: "Prime",
      include: ["Form", "Toast"],
    },
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".my-app-dark",
        },
      },
    },
  },
  lodash: {
    prefix: "__",
    prefixSkip: [],
    upperAfterPrefix: false,
    exclude: [],
    alias: [],
  },
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     httpOnly: true,
  //     maxAge: 3600*2,
  //   },
  //   storage: 'cookies',
  // }
  css: ["~/assets/scss/main.scss", "~/assets/scss/common.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
});
