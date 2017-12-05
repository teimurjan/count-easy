import {observable, action} from 'mobx';
import {get} from "../api";
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
    get('/payments', {
      data: [
        {id: 1, category: {name: 'Electricity'}, amount: 250, paid_at: '2017-11-21T18:25:43.511Z'},
        {id: 2, category: {name: 'Gas'}, amount: 150, paid_at: '2017-11-20T18:25:43.511Z'}
      ]
    })
      .then(res => {
        this.payments = res.data;
        this.isLoading = false;
      })
      .catch(err => {
        this.errors = err;
        this.isLoading = false;
      })
  }
}