import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './LoginForm.scss'
import {Link} from "react-router";
import {emailValidationRules, passwordValidationRules} from "../../Base/validations";

const LoginForm = Form.create()(({onEmailChange, onPasswordChange, onSubmit, form: {getFieldDecorator, validateFields}}) => {
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => !err && onSubmit())
  };

  return (
    <Form className="login-form">
      <Form.Item>
        {getFieldDecorator('email', emailValidationRules())(
          <Input onChange={onEmailChange} prefix={<Icon type="user" style={{fontSize: 13}}/>} type="email"
                 placeholder="Email"/>
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', passwordValidationRules())(
          <Input onChange={onPasswordChange} prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                 placeholder="Password"/>
        )}
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">Forgot password</a>
        <br/>
        <Button onClick={handleSubmit} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br/>
        <div className="login-form-register">Or <Link to="register">register now!</Link></div>
      </Form.Item>
    </Form>
  )
});

LoginForm.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export {LoginForm};
