import {observable, action} from 'mobx';
import {post, get} from "../api";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class AddPaymentStore extends StoreWithRouter {

  @observable amount;
  @observable categories;
  @observable isLoading;
  @observable date;
  @observable category;
  @observable errors;

  constructor(router) {
    super(router);
    this.amount = 0;
    this.categories = [];
    this.isLoading = false;
    this.errors = {};
    this.date = null;
    this.category = null;
    this.setAmount = this.setAmount.bind(this);
    this.setDate = this.setDate.bind(this);
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
  fetchCategories() {
    this.isLoading = true;
    get('/categories', {data: [{id: 1, name: 'Electricity'}, {id: 2, name: 'Gas'}]})
      .then(res => {
        this.categories = res.data;
        this.isLoading = false;
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      })
  }

  @action
  submit() {
    this.isLoading = true;
    const {amount, date, category: {id: category_id} = {}} = this;
    post('/payments', {amount, date, category_id}, {message: 'ok'})
      .then(res => {
        this.isLoading = false;
        this.router.push('/');
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      })
  }
}