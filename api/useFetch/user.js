import defaultFetchOptions from "@/utils/defaultFetchOptions";
export default () => ({
  async getUserInfo() {
    const res = await useFetch("/userInfo", {
      ...defaultFetchOptions,
      method: "get",
      key: "userInfo",
      lazy: true,
      transform(res) {
        if (res.code === "0") {
          return res.data.userInfo.username;
        }
      },
    });
    return {
      ...res,
      data: res.data.value,
    };
  },
});
