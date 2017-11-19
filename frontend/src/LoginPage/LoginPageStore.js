import {observable, action} from 'mobx';
import {post} from "../api";

export default class LoginPageStore {

  @observable email;
  @observable password;
  @observable isLoading;
  @observable error;

  constructor() {
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
      })
      .catch(err => {
          this.error = err.message;
          this.isLoading = false;
        }
      )
  }
}