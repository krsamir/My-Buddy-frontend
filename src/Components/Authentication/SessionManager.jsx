import Cookies from "universal-cookie";

export default class SessionManager {
  constructor() {
    this.cookie = new Cookies();
  }

  getAllCookies() {
    return this.cookie.getAll();
  }
  createCookie(name, value) {
    this.cookie.set(name, value, { path: "/" });
  }

  getCookiesByName(name) {
    return this.cookie.get(name);
  }

  deleteCookiesByName(name, option) {
    return this.cookie.remove(name, { path: "/" });
  }
}
