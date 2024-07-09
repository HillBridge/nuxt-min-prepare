export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    console.log("defineNuxtRouteMiddleware", from.fullPath, to.fullPath);
    const getAuthRes = await $fetch("/api/auth?type=get"); // 本地删除cooKie, 通过结果获取当前存储cookie的最新数据, useUserSession方法有延迟
    const isLoggedIn = __isEmpty(getAuthRes) ? false : !!getAuthRes?.user?.t;
    if (!isLoggedIn) {
      console.log("没有登陆", from.fullPath, to.fullPath);
      if (from.fullPath === "/user/login" && to.fullPath === "/user/login")
        return;
      if (from.fullPath !== "/user/login" && to.fullPath === "/user/login")
        return;
      return navigateTo("/user/login");
    }
  }
});
