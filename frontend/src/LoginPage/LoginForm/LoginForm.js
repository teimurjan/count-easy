import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {injectStore, injectStoreWithSchema} from "../../utils";
import './LoginForm.scss'

const LoginForm = Form.create()(({onEmailChange, onPasswordChange, onSubmit}) => (
  <Form className="login-form">
    <Form.Item>
      <Input onBlur={onEmailChange} prefix={<Icon type="user" style={{fontSize: 13}}/>}
             placeholder="Email"/>
    </Form.Item>
    <Form.Item>
      <Input onBlur={onPasswordChange} prefix={<Icon type="lock" style={{fontSize: 13}}/>}
             type="password" placeholder="Password"/>
    </Form.Item>
    <Form.Item>
      <Checkbox>Remember me</Checkbox>
      <a className="login-form-forgot" href="">Forgot password</a>
      <br/>
      <Button onClick={onSubmit} type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      <br/>
      <div className="login-form-register">Or <a href="">register now!</a></div>
    </Form.Item>
  </Form>
));

LoginForm.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export {LoginForm};
