export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const api = $fetch.create({
    baseURL: process.server
      ? runtimeConfig.apiBase
      : runtimeConfig.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 120000,
    credentials: "include",
    async onRequest({ request, options, error }) {
      if (process.server) {
        const { loggedIn, session } = useUserSession();
        if (loggedIn.value) {
          const token = session.value?.user?.t;
          const headers = (options.headers ||= {});
          headers.Authorization = `Bearer ${token}`;
        }
      }
    },
    async onResponseError({ response }) {
      if (process.server) {
        console.log("onResponseError", response.status);
        if (response.status === 401) {
          await nuxtApp.runWithContext(() => navigateTo("/user/login"));
        }
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
