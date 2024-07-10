export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("middleware-----defineNuxtRouteMiddleware");
  if (process.client) {
    // console.log("defineNuxtRouteMiddleware", from.fullPath, to.fullPath);
    const getAuthRes = await $fetch("/api/auth?type=get"); // 本地删除cooKie, 通过结果获取当前存储cookie的最新数据, useUserSession方法有延迟
    const isLoggedIn = __isEmpty(getAuthRes) ? false : !!getAuthRes?.user?.t;
    // console.log("auth.global.js", getAuthRes);
    if (!isLoggedIn) {
      console.log("没有登陆", from.fullPath, to.fullPath);
      if (from.fullPath === "/user/login" && to.fullPath === "/user/login")
        return;
      if (from.fullPath !== "/user/login" && to.fullPath === "/user/login")
        return;
      if (from.fullPath === "/user/login" && to.fullPath !== "/user/login")
        return abortNavigation();
      return navigateTo("/user/login");
    } else {
      // console.log("authed", from.fullPath, to.fullPath);
      if (from.fullPath !== "/user/login" && to.fullPath === "/user/login")
        return abortNavigation();
      // 目前还允许手动回到登陆页面
    }
  }
});
