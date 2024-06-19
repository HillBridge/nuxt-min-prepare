export default {
  baseURL: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
  onRequest({ options, request }) {
    // 添加请求拦截器
    const state = useCookie("state"); // 从cookie中获取token
    console.log("onRequest-options-useStateStore", request);
    if (state.value?.authToken) {
      options.headers.authToken = state.value.authToken;
    }
    return options;
  },
  onResponse({ response }) {
    // 添加响应拦截器
    // 对token失效或过期后跳转登陆页面可以在这操作
    if (response.status === 200) {
      return response._data;
    }
  },
};
