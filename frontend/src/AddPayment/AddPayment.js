import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Form, InputNumber, Modal} from "antd";
import SelectWithFetch from "../Base/UI/SelectWithFetch";
import {Select} from "antd"
import {injectStore} from "../utils";
import {fieldRequiredRules} from "../Base/validations";

const AddPayment = ({
                                    visible, categories, isLoading, errors, date, category, amount,
                                    setAmount, setCategory, setDate, fetchCategories, submit,
                                    form: {validateFields, getFieldDecorator}, onClose
                                  }) => {

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => !err && submit())
  };

  return (
    <Modal title="Add payment" visible={visible} confirmLoading={isLoading} onOk={handleSubmit} onCancel={onClose}>
      <Form>
        <Form.Item label='What' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          {getFieldDecorator('category', {...fieldRequiredRules('category'), onChange: setCategory})(
            <SelectWithFetch style={{width: '100%'}}
                             placeholder="Select category..." fetch={fetchCategories}
                             notFoundContent='No categories'>
              {categories.map((category, i) => (
                <Select.Option key={i} value={category.name}>{category.name}</Select.Option>
              ))}
            </SelectWithFetch>)}
        </Form.Item>
        <Form.Item label='How much' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          {getFieldDecorator('amount', {...fieldRequiredRules('amount'), onChange: setAmount})(
            <InputNumber min={0} style={{width: '100%'}} placeholder='Input amount'/>
          )}
        </Form.Item>
        <Form.Item label='When' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          {getFieldDecorator('date', {...fieldRequiredRules('date'), onChange: setDate})(
          <DatePicker style={{width: '100%'}} placeholder='Select a date...'/>)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

AddPayment.propTypes = {
  visible: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  date: PropTypes.object,
  category: PropTypes.string,
  setAmount: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

const  AddPaymentContainer = injectStore('addPaymentStore', Form.create()(AddPayment));
export {AddPayment, AddPaymentContainer};


