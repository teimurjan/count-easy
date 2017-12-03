import React from 'react';
import PropTypes from 'prop-types';
import {Select} from "antd";

export default class SelectWithFetch extends React.Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    ...Select.propTypes
  };

  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const {fetch, children, ...props} = this.props;
    return (
      <Select {...props}>
        {children}
      </Select>
    );
  }
}