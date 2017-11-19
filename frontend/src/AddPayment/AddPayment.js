import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Form, InputNumber, Modal} from "antd";
import SelectWithFetch from "../Base/UI/SelectWithFetch";
import {Select} from "antd"
import {injectStore} from "../utils";

const AddPayment = ({
                      visible, categories, isLoading, errors, date, category,
                      setAmount, setCategory, setDate, fetchCategories
                    }) => {

  return (
    <Modal title="Add payment" visible={visible}>
      <Form>
        <Form.Item label='What' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <SelectWithFetch style={{width: '100%'}} placeholder="Select category..." fetch={fetchCategories}
                           onChange={setCategory} notFoundContent='No categories'
                           value={category ? category.name : undefined}>
            {categories.map((category, i) => (
              <Select.Option key={i} value={category.name}>{category.name}</Select.Option>
            ))}
          </SelectWithFetch>
        </Form.Item>
        <Form.Item label='How much' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <InputNumber onChange={setAmount} min={0} style={{width: '100%'}} placeholder='Input amount'/>
        </Form.Item>
        <Form.Item label='When' labelCol={{span: 4}} wrapperCol={{span: 12}}>
          <DatePicker value={date} onChange={setDate} style={{width: '100%'}} placeholder='Select a date...'/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

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
};

const AddPaymentContainer = injectStore('addPaymentStore', AddPayment);
export {AddPayment, AddPaymentContainer};


