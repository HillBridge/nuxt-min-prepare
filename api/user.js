export default ($axios) => ({
  login(requestData) {
    return $axios.post("/api/v1/admin/login", requestData);
  },
});
