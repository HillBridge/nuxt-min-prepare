export default defineNuxtRouteMiddleware((nuxtApp, to, from) => {
  // const nuxtApp = useNuxtApp();
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  console.log("middleware---aaa:", isLoggedIn(), nuxtApp);

  if (process.client) {
    console.log("client--111", nuxtApp);
    // if (to.path === "/") return;
    // console.log("client--222", isLoggedIn());
    // if (!isLoggedIn()) {
    //   return router.push({ path: "/" });
    // }
  }
  // if (nuxtApp.isHydrating) {
  //   console.log("isHydrating", nuxtApp.static.data._isLogined);
  //   if (isAuthenticated) {
  //     return navigateTo("/", { redirectCode: 301 });
  //   }
  // }
  if (process.server) {
    // const isAuthenticated = () => {
    //   const cookie = useCookie("kkb:sess");
    //   return !!cookie?.value;
    // };
    console.log("server", isLoggedIn());
    nuxtApp._isLoggedIn = isLoggedIn();
  }
  //   // 存储token
  //   nuxtApp.static.data._isLogined = isAuthenticated();

  //   console.log("server", isLoggedIn());
  // }
});

// export default defineNuxtRouteMiddleware((nuxtApp, from) => {
//   const { isLoggedIn } = useAuth();
//   const router = useRouter();
//   console.log("aaa:", nuxtApp, from);

//   if (process.client) {
//     console.log("client", isLoggedIn());
//     if (!isLoggedIn()) {
//       return router.push({ path: "/" });
//     }
//   }

//   return ({ from, to }) => {
//     // 在路由改变之前执行的逻辑
//     console.log("kkkkk:", isLoggedIn());
//     console.log(`正在从 ${from.fullPath} 导航到 ${to.fullPath}`);
//   };
// });
