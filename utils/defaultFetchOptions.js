export default {
  baseURL: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
  onRequest({ options }) {
    // 添加请求拦截器
    const state = useCookie("state"); // 从cookie中获取token
    console.log("onRequest-options-useStateStore", state.value);
    if (state.value?.authToken) {
      options.headers.authToken = state.value.authToken;
    }
    return options;
  },
  onResponse(response) {
    // 添加响应拦截器
    // console.log("onResponse-response", response);
    return response;
  },
};
