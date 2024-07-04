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
      baseURL: baseUrl,
    });
  },
  async getUserInfo2(baseUrl) {
    const res = useAsyncData(
      "userInfo",
      () =>
        $fetch("/userInfo", {
          ...defaultFetchOptions,
          method: "get",
          baseURL: baseUrl,
        })
      // {
      //   transform(res) {
      //     console.log("dddd", res);
      //     if (res.code === "0") {
      //       return res.data.userInfo.age;
      //     }
      //   },
      // }
    );
    console.log("hhhh", data);
    return {
      ...res,
      data: res.data.value,
    };
  },
  async getUserInfo2ByLazy(baseUrl) {
    console.log("getUserInfo2ByLazy---getUserInfo2ByLazy", baseUrl);
    const res = await useAsyncData("userInfo", () =>
      $fetch("/userInfo?id=2", {
        ...defaultFetchOptions,
        method: "get",
        baseURL: baseUrl,
      })
    );
    console.log("bbbbb", res);
    return {
      ...res,
      data: res.data.value,
    };
  },
});
