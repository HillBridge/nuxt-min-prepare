import User from "./user";
export default class Api {
  constructor($axios) {
    this.$axios = $axios || null;
  }

  get user() {
    const user = User(this.$axios);
    return {
      ...user,
    };
  }
}
