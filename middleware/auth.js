const isAuthenticated = () => {
  const cookie = useCookie("kkb:sess");
  return !!cookie?.value;
};
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    if (isAuthenticated()) {
      return abortNavigation();
    }
  }
});
