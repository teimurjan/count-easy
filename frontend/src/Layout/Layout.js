import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon, Button, Layout} from 'antd';
import {Link} from "react-router";
import {AddPaymentContainer} from "../AddPayment/AddPayment";
import {injectStoreWithSchema} from "../utils";

const {Content, Footer, Sider} = Layout;

class PageLayout extends React.Component {
  static propTypes = {
    openAddPayment: PropTypes.func.isRequired,
    closeAddPayment: PropTypes.func.isRequired,
  };

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({collapsed});
  };

  render() {
    const selectedKeys = window.location.pathname === '/' ? ['1'] : ['2'];
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <Menu
            selectedKeys={selectedKeys}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}>
            <Menu.Item key='1'>
              <Link to="/">
                <Icon type="calendar"/>
                <span>Calendar</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to="/calculator">
                <Icon type="calculator"/>
                <span>Calculator</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{margin: '0 16px', textAlign: 'center'}}>
            {this.props.children}
            <Button type='primary' onClick={this.props.openAddPayment}>Add payment</Button>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Money Saver ©2017
          </Footer>
        </Layout>
        <AddPaymentContainer visible={this.state.isAddingPayment} onClose={this.props.closeAddPayment}/>
      </Layout>
    );
  }
}

const LayoutContainer = injectStoreWithSchema('addPaymentStore', {
  openAddPayment: 'open',
  closeAddPayment: 'close'
}, PageLayout);
export {PageLayout as Layout, LayoutContainer};