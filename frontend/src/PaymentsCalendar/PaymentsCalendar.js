import React from 'react';
import PropTypes from 'prop-types';
import {injectStore} from "../utils";
import {Calendar} from 'antd';
import moment from "moment";
import './PaymentsCalendar.scss';

class PaymentsCalendar extends React.Component {
  componentWillMount() {
    this.props.fetchPayments();
  }

  dateCellRenderer = v => {
    const isPaymentOnDate = payment => moment(payment.date).format('YYYY MM DD') === v.format('YYYY MM DD')
    const paymentsOnDate = this.props.payments.filter(isPaymentOnDate);
    return (
      <ul>
        {paymentsOnDate.map(payment => <li key={payment.id}>
            {payment.category.name}: <span className="payment-amount">{payment.amount}$</span>
          </li>
        )}
      </ul>);
  };

  monthCellRender = v => {
    const month = v.month();
    const monthTotal = this.props.payments.reduce((acc, payment) => moment(payment.date).month() === month ? acc + payment.amount : acc, 0);
    return monthTotal > 0 ?
      <p>Your total pay on this month is: <span
        className="payment-amount">{monthTotal}$</span></p>
      : <p>No payments on this month</p>;
  };

  render() {
    return (
      <Calendar dateCellRender={this.dateCellRenderer} monthCellRender={this.monthCellRender}/>
    );
  }
}

PaymentsCalendar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchPayments: PropTypes.func.isRequired,
  payments: PropTypes.object.isRequired,
};
const PaymentsCalendarContainer = injectStore('paymentsCalendarStore', PaymentsCalendar);
export {PaymentsCalendar, PaymentsCalendarContainer};