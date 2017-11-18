import React from 'react';
import ReactDOM from 'react-dom';
import {LoginPageContainer} from "./LoginPage/LoginPage";
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {Provider} from "mobx-react";
import {stores} from "./stores";

ReactDOM.render(
  <Provider {...stores}>
    <LoginPageContainer/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
