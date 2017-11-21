import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Form, InputNumber, Modal} from "antd";
import SelectWithFetch from "../Base/UI/SelectWithFetch";
import {Select} from "antd"
import {injectStore} from "../utils";
import {fieldRequiredRules} from "../Base/validations";

const AddPayment = Form.create()(({
                                    visible, categories, isLoading, errors, date, category, amount,
                                    setAmount, setCategory, setDate, fetchCategories, submit,
                                    form: {validateFields, getFieldProps}
                                  }) => {

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => !err && submit())
  };

  return (
    <Modal title="Add payment" visible={visible} confirmLoading={isLoading} onOk={handleSubmit}>
      <Form>
        <Form.Item label='What' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <SelectWithFetch style={{width: '100%'}}
                           placeholder="Select category..." fetch={fetchCategories}
                           notFoundContent='No categories'
                           {...getFieldProps('category', {...fieldRequiredRules('category'), onChange: setCategory})}>
            {categories.map((category, i) => (
              <Select.Option key={i} value={category.name}>{category.name}</Select.Option>
            ))}
          </SelectWithFetch>
        </Form.Item>
        <Form.Item label='How much' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <InputNumber {...getFieldProps('amount', {...fieldRequiredRules('amount'), onChange: setAmount})} min={0}
                       style={{width: '100%'}} placeholder='Input amount'/>
        </Form.Item>
        <Form.Item label='When' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <DatePicker {...getFieldProps('date', {...fieldRequiredRules('date'), onChange: setDate})}
                      style={{width: '100%'}} placeholder='Select a date...'/>
        </Form.Item>
      </Form>
    </Modal>
  );
});

AddPayment.propTypes = {
  visible: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  date: PropTypes.object,
  category: PropTypes.object,
  setAmount: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const AddPaymentContainer = injectStore('addPaymentStore', AddPayment);
export {AddPayment, AddPaymentContainer};


