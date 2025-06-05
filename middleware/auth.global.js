export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("middleware-----defineNuxtRouteMiddleware");

  // 在中间件中，我们可以直接使用 $fetch，不需要检查客户端
  const getAuthRes = await $fetch("/api/auth/get"); // 本地删除cooKie, 通过结果获取当前存储cookie的最新数据, useUserSession方法有延迟
  const isLoggedIn = __isEmpty(getAuthRes) ? false : !!getAuthRes?.user?.t;

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
    if (from.fullPath !== "/user/login" && to.fullPath === "/user/login")
      return abortNavigation();
    // 目前还允许手动回到登陆页面
  }
});
