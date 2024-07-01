export default {
  baseURL: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
  credentials: "include",
  // mode: "cors",
  onRequest({ options, request }) {
    // 添加请求拦截器
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
