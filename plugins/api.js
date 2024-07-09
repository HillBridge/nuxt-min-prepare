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
      // 请求既可以从客户端来, 也可以在服务端来
      const { loggedIn, session } = useUserSession();
      const getAuthRes = await $fetch("/api/auth?type=get");
      const getToken = () => {
        const interfaceToken = __isEmpty(getAuthRes)
          ? false
          : getAuthRes?.user?.t;
        const apiToken = loggedIn.value ? session.value?.user?.t : "";
        return interfaceToken || apiToken;
      };
      const token = getToken();
      console.log("onRequest", token);
      if (token) {
        const headers = (options.headers ||= {});
        headers.Authorization = `Bearer ${token}`;
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
