import defaultFetchOptions from "@/utils/defaultFetchOptions";
export default ($fetch) => ({
  login(requestData) {
    return $fetch("/login", {
      ...defaultFetchOptions,
      method: "post",
      body: requestData,
    });
  },
  getUserInfo(baseUrl) {
    return $fetch("/userInfo", {
      ...defaultFetchOptions,
      method: "get",
      baseUrl,
    });
  },
  async getUserInfo2(baseUrl) {
    const res = await useAsyncData(
      "userInfo",
      () =>
        $fetch("/userInfo", {
          ...defaultFetchOptions,
          method: "get",
          baseUrl,
        }),
      {
        transform(res) {
          if (res.code === "0") {
            return res.data.userInfo.age;
          }
        },
      }
    );
    return {
      ...res,
      data: res.data.value,
    };
  },
  async getUserInfo2ByLazy() {
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
});
