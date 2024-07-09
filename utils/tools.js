export const authKey = "xcloud-auth";
export const getSessionStorage = (key) => {
  if (!key) return;
  return window.sessionStorage.getItem(key);
};
export const setSessionStorage = (key, val) => {
  if (!key) return;
  return window.sessionStorage.setItem(key, val);
};
