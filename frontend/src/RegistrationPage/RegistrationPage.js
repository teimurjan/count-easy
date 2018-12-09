import React from "react";
import PropTypes from "prop-types";
import { injectStore } from "../utils";
import { Spin } from "antd";
import "./RegistrationPage.scss";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";

const RegistrationPage = ({
  isLoading,
  setEmail,
  setPassword,
  setName,
  submit
}) => {
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onNameChange = e => setName(e.target.value);

  return (
    <div id="registrationPage">
      <Spin wrapperClassName="registration-page-wrapper" spinning={isLoading}>
        <h1 className="registration-page-title">Welcome!</h1>
        <RegistrationForm
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={submit}
        />
      </Spin>
    </div>
  );
};

RegistrationPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
};

const RegistrationPageContainer = injectStore(
  "registrationPageStore",
  RegistrationPage
);
export { RegistrationPage, RegistrationPageContainer };
