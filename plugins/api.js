import ClientApi from "@/api/client";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    console.log("api-----app:created");
    // 这里的$fetch是框架提供的工具, 底层是ofetch
    nuxtApp.provide("clientFetch", new ClientApi($fetch));
  });
});
