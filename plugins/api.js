import FetchApi from "@/api/fetch";
import UseFetchApi from "@/api/useFetch";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    console.log("plugins");
    // 这里的$fetch是框架提供的工具, 底层是ofetch
    nuxtApp.provide("api", new FetchApi($fetch));

    // useAsyncFetch + $fetch 完全可以替代useFetch
    nuxtApp.provide("useFetch", new UseFetchApi());
  });
});
