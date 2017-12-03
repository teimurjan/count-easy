import React from 'react';
import {Route} from "react-router";
import {App} from "./App/App";
import {LoginPageContainer} from "./LoginPage/LoginPage";
import {RegistrationPageContainer} from "./RegistrationPage/RegistrationPage";

export default (
  <Route path='/' component={App}>
    <Route path='login' component={LoginPageContainer}/>
    <Route path='register' component={RegistrationPageContainer}/>
  </Route>
)