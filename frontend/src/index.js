import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {syncHistoryWithStore, RouterStore} from 'mobx-react-router';
import {browserHistory, Router} from 'react-router';
import 'antd/dist/antd.css';
import {Provider} from "mobx-react";
import createStore from "./createStore";
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';
import {App} from "./App/App";
import {LayoutContainer} from "./Layout/Layout";
import {PaymentsCalendarContainer} from "./PaymentsCalendar/PaymentsCalendar";
import {LoginPageContainer} from "./LoginPage/LoginPage";
import {RegistrationPageContainer} from "./RegistrationPage/RegistrationPage";
import {IndexRoute, Route} from "react-router";

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const store = createStore(routingStore);

function checkAuth(nextState, replace) {
  if (!localStorage.getItem('token')) {
    replace('/login');
  }
}

ReactDOM.render(
  <Provider {...store}>
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route component={LayoutContainer} onEnter={checkAuth}>
            <IndexRoute component={PaymentsCalendarContainer}/>
          </Route>
          <Route path='login' component={LoginPageContainer}/>
          <Route path='register' component={RegistrationPageContainer}/>
        </Route>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
