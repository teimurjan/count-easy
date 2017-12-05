import React from 'react';
import {IndexRoute, Route} from "react-router";
import {App} from "./App/App";
import {LoginPageContainer} from "./LoginPage/LoginPage";
import {RegistrationPageContainer} from "./RegistrationPage/RegistrationPage";
import {LayoutContainer} from "./Layout/Layout";
import {PaymentsCalendarContainer} from "./PaymentsCalendar/PaymentsCalendar";

export default (
  <Route path='/' component={App}>
    <Route component={LayoutContainer}>
      <IndexRoute component={PaymentsCalendarContainer}/>
    </Route>
    <Route path='login' component={LoginPageContainer}/>
    <Route path='register' component={RegistrationPageContainer}/>
  </Route>
)