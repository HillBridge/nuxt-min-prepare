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
      const getAuthRes = await $fetch("/api/auth?type=get");
      const getAuthToken = () => {
        const { loggedIn, session } = useUserSession();
        const tokenFromApi = __isEmpty(getAuthRes) ? "" : getAuthRes?.user?.t;
        if (tokenFromApi) return tokenFromApi;
        if (loggedIn.value) return session.value?.user?.t;
      };
      const token = getAuthToken();
      if (token) {
        const headers = (options.headers ||= {});
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${token}`]);
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${token}`);
        } else {
          headers.Authorization = `Bearer ${token}`;
        }
      }
    },
    async onResponseError({ response }) {
      console.log("onResponseError", response.status);
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/user/login"));
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
