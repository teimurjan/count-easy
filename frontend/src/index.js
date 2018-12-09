import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { syncHistoryWithStore, RouterStore } from "mobx-react-router";
import { browserHistory, Router, IndexRoute, Route, Redirect } from "react-router";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import { unregister as unregisterServiceWorker } from "./registerServiceWorker";
import "antd/dist/antd.css";
import createStore from "./createStore";
import { App } from "./App/App";
import { LayoutContainer } from "./Layout/Layout";
import { PaymentsCalendarContainer } from "./PaymentsCalendar/PaymentsCalendar";
import { LoginPageContainer } from "./LoginPage/LoginPage";
import { RegistrationPageContainer } from "./RegistrationPage/RegistrationPage";
import fetchIntercept from "fetch-intercept";

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const store = createStore(routingStore);

fetchIntercept.register({
  response: function(response) {
    if (response.status === 401) {
      history.push("/login");
    }
    return response;
  }
});

ReactDOM.render(
  <Provider {...store}>
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginPageContainer} />
          <Route path="register" component={RegistrationPageContainer} />
          <Route component={LayoutContainer}>
            <IndexRoute component={PaymentsCalendarContainer} />
          </Route>
          <Redirect from='*' to='/' />
        </Route>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);
unregisterServiceWorker();
