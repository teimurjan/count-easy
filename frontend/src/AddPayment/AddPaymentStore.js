import { observable, action } from "mobx";
import { post, get } from "../api";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class AddPaymentStore extends StoreWithRouter {
  @observable amount;
  @observable visible;
  @observable categories;
  @observable isLoading;
  @observable date;
  @observable category;
  @observable errors;

  constructor(router, updatePayments) {
    super(router);
    this.init = this.init.bind(this);
    this.init();
    this.setAmount = this.setAmount.bind(this);
    this.setDate = this.setDate.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.submit = this.submit.bind(this);
    this.open = this.setVisible.bind(this, true);
    this.close = this.setVisible.bind(this, false);
    this.updatePayments = updatePayments;
  }

  init() {
    this.amount = 0;
    this.visible = false;
    this.categories = [];
    this.isLoading = false;
    this.errors = {};
    this.date = null;
    this.category = undefined;
  }

  @action
  setAmount(amount) {
    this.amount = amount;
  }

  @action
  setDate(date) {
    this.date = date;
  }

  @action
  setCategory(category) {
    this.category = category;
  }

  @action
  setVisible(visible) {
    this.visible = visible;
  }

  @action
  fetchCategories() {
    this.isLoading = true;
    get("/api/categories")
      .then(res => {
        this.categories = res;
        this.isLoading = false;
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      });
  }

  @action
  submit() {
    this.isLoading = true;
    const { amount, date, category } = this;
    post("/api/payments", { amount, date, categoryId: category })
      .then(res => {
        this.isLoading = false;
        this.router.push("/");
        this.updatePayments();
        this.init();
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      });
  }
}
