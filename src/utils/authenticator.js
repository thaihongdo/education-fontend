export const authenticator = {
  setAuthenticate() {
    localStorage.setItem("isLoggedIn", true);
  },
  isAuthenticate() {
    return !!localStorage.getItem("isLoggedIn");
  },
  clear() {
    localStorage.removeItem("isLoggedIn");
  },
};
