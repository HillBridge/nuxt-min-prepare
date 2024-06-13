export default {
  baseURL: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
  onRequest({ options }) {
    // 添加请求拦截器
    const { authToken } = useStateStore();
    console.log("onRequest-options", options, authToken);
    if (authToken) {
      options.headers.authToken = authToken;
    }
    return options;
  },
  onResponse(response) {
    // 添加响应拦截器
    console.log("onResponse-response", response);
    return response;
  },
};
