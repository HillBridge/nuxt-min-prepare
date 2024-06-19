import User from "./user";

export default class Api {
  get user() {
    const user = User();
    return {
      ...user,
    };
  }
}
