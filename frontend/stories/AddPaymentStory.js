import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import {AddPayment} from "../src/AddPayment/AddPayment";
import moment from 'moment';
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';

const setAmount = action("Set amount");
const setDate = action("Set date");
const setCategory = action("Set category");
const fetchCategories = action("Fetched categories");
const submit = action("Submitted");
const actions = {setCategory, setAmount, setDate, fetchCategories, submit};

const initialState = {
  visible: true,
  amount: 0,
  categories: [],
  isLoading: false,
  errors: {},
  date: null,
  category: null,
  ...actions
};

export default storiesOf('Add Payment modal', module)
  .add('Initial State', () => (
    <LocaleProvider locale={enUS}>
      <AddPayment {...initialState}/>
    </LocaleProvider>)
  )
  .add('With Content', () => (
    <LocaleProvider locale={enUS}>
      <AddPayment {...Object.assign({}, initialState, {
        categories: [{id: 1, name: 'Electricity'}, {id: 2, name: 'Gas'}]
      })}/>
    </LocaleProvider>)
  )
  .add('Loading State', () => (
      <LocaleProvider locale={enUS}>
        <AddPayment {...Object.assign({}, initialState, {
          isLoading: true
        })}/>
      </LocaleProvider>
    )
  )