export default defineNuxtRouteMiddleware((to, from) => {
  const { resetAuthToken } = useStateStore();
  const isLogined = useAuth();
  if (!isLogined) {
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
