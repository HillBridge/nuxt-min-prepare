export default ($fetch) => ({
  login(requestData) {
    return $fetch("/login", {
      baseURL: "http://localhost:3003",
      timeout: 6000,
      method: "post",
      body: requestData,
    });
  },
  getUserInfo() {
    return $fetch("/userInfo", {
      baseURL: "http://localhost:3003",
      timeout: 6000,
      method: "get",
    });
  },
});
