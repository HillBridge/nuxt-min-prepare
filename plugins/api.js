import ClientApi from "@/api/client";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    // 这里的$fetch是框架提供的工具, 底层是ofetch
    nuxtApp.provide("clientFetch", new ClientApi($fetch));

    const stateStore = useStateStore();
    console.log("client-app:created", stateStore.authToken);
    nuxtApp.provide("t", stateStore.authToken);

    // if (process.client) {
    //   const stateStore = useStateStore();
    //   console.log("client-app:created", stateStore.authToken);
    //   nuxtApp.provide("t", stateStore.authToken);
    // } else if (process.server) {
    //   const stateStore = useStateStore();
    //   console.log("server-app:created", stateStore.authToken);
    // }
  });
});
