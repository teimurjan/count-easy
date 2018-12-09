import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Button, Layout } from "antd";
import { Link } from "react-router";
import { AddPaymentContainer } from "../AddPayment/AddPayment";
import { injectStoreWithSchema } from "../utils";
import { CalculatorContainer } from "../Calculator/Calculator";

const { Content, Footer, Sider } = Layout;

class PageLayout extends React.Component {
  static propTypes = {
    openAddPayment: PropTypes.func.isRequired,
    closeAddPayment: PropTypes.func.isRequired,
    openCalculator: PropTypes.func.isRequired,
    closeCalculator: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
            selectedKeys={['1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="calendar" />
                <span>Calendar</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <a onClick={this.props.logout}>
                <Icon type="logout" />
                <span>Log out</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px", textAlign: "center" }}>
            {this.props.children}
            <Button
              type="primary"
              size="large"
              onClick={this.props.openAddPayment}
              style={{ width: "20%", margin: "0.5rem" }}
            >
              Add payment
            </Button>
            <Button
              type="secondary"
              size="large"
              onClick={this.props.openCalculator}
              style={{ width: "20%", margin: "0.5rem" }}
            >
              Calculator
            </Button>
          </Content>
          <Footer style={{ textAlign: "center" }}>Count Easy ©2018</Footer>
        </Layout>
        <AddPaymentContainer onClose={this.props.closeAddPayment} />
        <CalculatorContainer onClose={this.props.closeCalculator} />
      </Layout>
    );
  }
}

const LayoutContainer = injectStoreWithSchema(
  {
    addPaymentStore: {
      openAddPayment: "open",
      closeAddPayment: "close"
    },
    calculatorStore: {
      openCalculator: "open",
      closeCalculator: "close"
    },
    appStore: {
      logout: "logout"
    }
  },
  PageLayout
);
export { PageLayout as Layout, LayoutContainer };
