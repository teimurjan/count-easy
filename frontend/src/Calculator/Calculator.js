import React from "react";
import PropTypes from "prop-types";
import { Form, InputNumber, Modal, Tag } from "antd";
import SelectWithFetch from "../Base/UI/SelectWithFetch";
import { Select } from "antd";
import { injectStore } from "../utils";
import { fieldRequiredRules } from "../Base/validations";
import { getMessage } from "./utils";

const Calculator = Form.create()(
  ({
    visible,
    categories,
    isLoading,
    errors,
    category: categoryId,
    amount,
    setAmount,
    setCategory,
    fetchCategories,
    form: { validateFields, getFieldDecorator, getFieldValue, setFieldsValue },
    onClose
  }) => {
    if (amount !== getFieldValue("amount")) {
      setFieldsValue({ amount });
    }

    if (categoryId !== getFieldValue("category")) {
      setFieldsValue({ category: categoryId });
    }

    const category = categories.find(c => c.id === categoryId);
    const isAmountValid = !Number.isNaN(parseInt(amount, 10)) && String(amount).match(/^\d+$/)

    return (
      <Modal
        title="Is your payment right?"
        visible={visible}
        confirmLoading={isLoading}
        onCancel={onClose}
        onOk={validateFields}
      >
        <Form>
          <Form.Item
            label="Service"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("category", {
              ...fieldRequiredRules("category"),
              onChange: setCategory
            })(
              <SelectWithFetch
                style={{ width: "100%" }}
                placeholder="Select a service"
                fetch={fetchCategories}
                notFoundContent="No services available"
              >
                {categories.map((c, i) => (
                  <Select.Option key={i} value={c.id}>
                    {c.name}
                  </Select.Option>
                ))}
              </SelectWithFetch>
            )}
          </Form.Item>
          <Form.Item
            label="Spent (KGS)"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("amount", {
              ...fieldRequiredRules("amount"),
              onChange: setAmount
            })(<InputNumber min={0} style={{ width: "100%" }} />)}
          </Form.Item>
        </Form>
        {isAmountValid && category ? (
          <Tag
            style={{
              height: "100%",
              width: "100%",
              whiteSpace: "normal"
            }}
            color="purple"
          >
            {getMessage(category, amount)}
          </Tag>
        ) : null}
      </Modal>
    );
  }
);

Calculator.propTypes = {
  visible: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  category: PropTypes.string,
  setAmount: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

const CalculatorContainer = injectStore("calculatorStore", Calculator);
export { Calculator, CalculatorContainer };
