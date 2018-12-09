import { observable, action } from "mobx";
import { get } from "../api";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class CalculatorStore extends StoreWithRouter {
  @observable amount;
  @observable visible;
  @observable categories;
  @observable isLoading;
  @observable category;
  @observable errors;

  constructor(router) {
    super(router);
    this.init = this.init.bind(this);
    this.init();
    this.setAmount = this.setAmount.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.open = this.setVisible.bind(this, true);
    this.close = this.setVisible.bind(this, false);
  }

  init() {
    this.amount = 0;
    this.visible = false;
    this.categories = [];
    this.isLoading = false;
    this.errors = {};
    this.category = undefined;
  }

  @action
  setAmount(amount) {
    this.amount = amount;
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
}
