import { observable, action } from "mobx";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class AppStore extends StoreWithRouter {
  @observable isLoggedIn;

  constructor(router) {
    super(router);
    this.logout = this.logout.bind(this);
  }

  @action
  logout() {
    localStorage.removeItem("token");
    this.router.push("/login");
  }
}
