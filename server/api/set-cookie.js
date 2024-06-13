import Cookies from "universal-cookie";
export default defineEventHandler((event) => {
  console.log("event999", event.node.req.headers);
  const cookies = new Cookies(event.node.req.headers.cookie, { path: "/" });
  console.log("get-cookie-from-cache!!", cookies.get("_tt"));
  const cacheToken = cookies.get("_tt");
  if (!cacheToken) {
    const _t = event.node.req.headers.tt;
    if (!_t) return;

    cookies.set("_tt", _t, { httpOnly: true });
    console.log("get-cookie-success!!", cookies.get("_tt"));
  }
});
