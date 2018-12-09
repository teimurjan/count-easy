import React from "react";
import PropTypes from "prop-types";
import { injectStore } from "../utils";
import { Spin } from "antd";
import "./LoginPage.scss";
import { LoginForm } from "./LoginForm/LoginForm";

const LoginPage = ({ isLoading, setEmail, setPassword, submit }) => {
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  return (
    <div id="loginPage">
      <Spin wrapperClassName="login-page-wrapper" spinning={isLoading}>
        <h1 className="login-page-title">Hello!</h1>
        <LoginForm
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={submit}
        />
      </Spin>
    </div>
  );
};

LoginPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
};

const LoginPageContainer = injectStore("loginPageStore", LoginPage);
export { LoginPage, LoginPageContainer };
