import User from "./user";

export default class Api {
  constructor($fetch) {
    this.$fetch = $fetch || null;
  }

  get user() {
    const user = User(this.$fetch);
    return {
      ...user,
    };
  }
}
