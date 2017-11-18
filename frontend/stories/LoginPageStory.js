import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import {LoginPage} from "../src/LoginPage/LoginPage";

const setEmail = action("Set email");
const setPassword = action("Set password");
const submit = action("Submitted");

const actions = {setPassword, setEmail, submit};

export default storiesOf('Login Page', module)
  .add('Initial State', () => (
    <LoginPage isLoading={false} {...actions}/>)
  )
  .add('Loading state', () => (
    <LoginPage isLoading={true} {...actions}/>)
  )
