import {observable, action} from 'mobx';
import {post} from "../api";
import StoreWithRouter from "../Base/StoreWithRouter";

export default class LoginPageStore extends StoreWithRouter {

  @observable email;
  @observable password;
  @observable isLoading;
  @observable error;

  constructor(router) {
    super(router);
    this.email = '';
    this.password = '';
    this.isLoading = false;
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  @action
  submit() {
    const {email, password} = this;
    this.isLoading = true;
    post('/login', {email, password}, {token: 'stub token'})
      .then(res => {
        localStorage.setItem('token', res.token);
        this.isLoading = false;
        this.router.push('/');
      })
      .catch(err => {
          this.error = err.message;
          this.isLoading = false;
        }
      )
  }
}