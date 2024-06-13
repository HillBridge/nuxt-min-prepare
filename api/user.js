import defaultFetchOptions from "@/utils/defaultFetchOptions";
export default ($fetch) => ({
  login(requestData) {
    return $fetch("/login", {
      ...defaultFetchOptions,
      method: "post",
      body: requestData,
    });
  },
  getUserInfo() {
    return $fetch("/userInfo", {
      ...defaultFetchOptions,
      method: "get",
    });
  },
});
