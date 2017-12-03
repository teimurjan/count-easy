import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {syncHistoryWithStore, RouterStore} from 'mobx-react-router';
import {browserHistory, Router} from 'react-router';
import 'antd/dist/antd.css';
import {Provider} from "mobx-react";
import routes from "./routes";
import createStore from "./createStore";
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const store = createStore(routingStore);

ReactDOM.render(
  <Provider {...store}>
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        {routes}
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
