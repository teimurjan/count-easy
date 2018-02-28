import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';
import {PaymentsCalendar} from "../src/PaymentsCalendar/PaymentsCalendar";

const fetchPayments = action("Fetched payments");
const actions = {fetchPayments};

const initialState = {
  isLoading: false,
  payments: [],
  ...actions
};

export default storiesOf('Payments Calendar', module)
  .add('Initial State', () => (
    <LocaleProvider locale={enUS}>
      <PaymentsCalendar {...initialState}/>
    </LocaleProvider>)
  )
  .add('With content', () => (
    <LocaleProvider locale={enUS}>
      <PaymentsCalendar {...Object.assign({}, initialState, {
        payments: [
          {id: 1, category: {name: 'Electricity'}, amount: 250, date: '2017-11-21T18:25:43.511Z'},
          {id: 2, category: {name: 'Gas'}, amount: 150, date: '2017-11-20T18:25:43.511Z'},
          {id: 3, category: {name: 'Water'}, amount: 20, date: '2017-11-20T18:25:43.511Z'},
          {id: 3, category: {name: 'Water'}, amount: 20, date: '2018-01-26T05:54:46.463Z'},
        ]
      })}/>
    </LocaleProvider>
  ))