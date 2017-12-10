import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button} from 'antd';
import './RegistrationForm.scss'
import {Link} from "react-router";
import {emailValidationRules, fieldRequiredRules, passwordValidationRules} from "../../Base/validations";

const RegistrationForm = Form.create()(({onNameChange, onEmailChange, onPasswordChange, onSubmit, form: {getFieldDecorator, validateFields}}) => {
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => !err && onSubmit())
  };

  return (
    <Form className="registration-form">
      <Form.Item>
        {getFieldDecorator('name', fieldRequiredRules('name'))(
          <Input onChange={onNameChange} prefix={<Icon type="smile-o" style={{fontSize: 13}}/>} placeholder="Name"/>
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', emailValidationRules(true))(
          <Input onChange={onEmailChange} prefix={<Icon type="mail" style={{fontSize: 13}}/>} type="email"
                 placeholder="Email"/>
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', passwordValidationRules(true))(
          <Input onChange={onPasswordChange} prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                 placeholder="Password"/>
        )}
      </Form.Item>
      <Form.Item>
        <Button onClick={handleSubmit} type="primary" htmlType="submit" className="registration-form-button">
          Register
        </Button>
        <br/>
        <div className="registration-form-login">Already registered? <Link to="login">Sign in</Link></div>
      </Form.Item>
    </Form>
  )
});

RegistrationForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export {RegistrationForm};
