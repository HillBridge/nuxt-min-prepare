export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogined } = useAuth();
  if (!isLogined()) {
    console.log("没有登陆", from.fullPath, to.fullPath);
    if (from.fullPath === "/api/fetch" && to.fullPath === "/api/fetch") return;
    if (from.fullPath !== "/api/fetch" && to.fullPath === "/api/fetch") return;
    const router = useRouter();
    return router.push({ path: "/api/fetch" });
  }
});
