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
  async getUserInfo2() {
    const res = await useAsyncData("userInfo", () =>
      $fetch("/userInfo", {
        ...defaultFetchOptions,
        method: "get",
      })
    );
    return {
      ...res,
      data: res.data.value,
    };
  },
  async getUserInfo2ByLazy() {
    const res = await useLazyAsyncData("userInfo", () =>
      $fetch("/userInfo", {
        ...defaultFetchOptions,
        method: "get",
      })
    );
    return {
      ...res,
      data: res.data.value,
    };
  },
});
