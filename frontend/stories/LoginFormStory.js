import React from 'react';
import {LoginForm} from "../src/LoginPage/LoginForm/LoginForm";
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

export default storiesOf('Login Form', module)
  .add('Initial State', () => (
    <LoginForm onEmailChange={action('Email changed')}
               onPasswordChange={action('Password changed')}
               onSubmit={action('Submitted')}/>))
