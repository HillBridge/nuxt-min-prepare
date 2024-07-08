export default defineNuxtRouteMiddleware(async (to, from) => {
  const { resetAuthToken } = useStateStore();

  const getAuthRes = await $fetch("/api/auth?type=get");
  const { loggedIn } = await useUserSession();
  const isLoggedIn = () => {
    const isApiLoggedIn = __isEmpty(getAuthRes) ? false : !!getAuthRes?.user?.t;
    if (isApiLoggedIn) return true;
    return loggedIn.value;
  };

  //console.log("middleware-auth-global", getAuthRes);
  if (!isLoggedIn()) {
    console.log("没有登陆", from.fullPath, to.fullPath);
    if (from.fullPath === "/user/login" && to.fullPath === "/user/login")
      return;
    if (from.fullPath !== "/user/login" && to.fullPath === "/user/login")
      return;
    const router = useRouter();
    resetAuthToken();
    return router.push({ path: "/user/login" });
  }
});
