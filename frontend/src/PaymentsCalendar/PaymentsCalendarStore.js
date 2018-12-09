import { observable, action } from "mobx";
import { get } from "../api";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class RegistrationPageStore extends StoreWithRouter {
  @observable payments;
  @observable isLoading;
  @observable error;

  constructor(router) {
    super(router);
    this.payments = [];
    this.isLoading = false;
    this.fetchPayments = this.fetchPayments.bind(this);
  }

  @action
  fetchPayments() {
    this.isLoading = true;
    get("/api/payments")
      .then(res => {
        this.payments = res;
        this.isLoading = false;
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      });
  }
}
