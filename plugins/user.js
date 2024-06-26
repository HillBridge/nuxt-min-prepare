export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    try {
      // useFetch 服务端渲染
      const { data } = await useFetch("http://localhost:3003/userInfo");
      console.log("init----app:created");
      if (data.value.code === "0") {
        nuxtApp.provide("username", data.value.data.userInfo.username);
        nuxtApp.username = data.value.data.userInfo.username;
      }
    } catch (err) {
      console.log("err", err);
    }
  });
  nuxtApp.hook("page:start", () => {
    // console.log("page:start");
  });
  nuxtApp.hook("vue:error", (..._args) => {
    // console.log("vue:error");
    // if (process.client) {
    //   console.log(..._args)
    // }
  });
});
