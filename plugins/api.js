export default defineNuxtPlugin((nuxtApp) => {
  const { session } = useUserSession();
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
    onRequest({ request, options, error }) {
      console.log("onRequest", session.value);
      const token = session.value?.user?.t;
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
