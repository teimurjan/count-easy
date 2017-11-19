import React from 'react';
import {Route} from "react-router";
import {App} from "./App/App";
import {LoginPageContainer} from "./LoginPage/LoginPage";

export default (
  <Route path='/' component={App}>
    <Route path='login' component={LoginPageContainer}/>
  </Route>
)