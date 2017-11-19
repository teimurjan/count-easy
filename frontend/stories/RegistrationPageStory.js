import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import {RegistrationPage} from "../src/Registration/RegistrationPage";

const setName = action("Set name");
const setEmail = action("Set email");
const setPassword = action("Set password");
const submit = action("Submitted");

const actions = {setPassword, setEmail, setName, submit};

export default storiesOf('Registration Page', module)
  .add('Initial State', () => (
    <RegistrationPage isLoading={false} {...actions}/>)
  )
  .add('Loading state', () => (
    <RegistrationPage isLoading={true} {...actions}/>)
  )