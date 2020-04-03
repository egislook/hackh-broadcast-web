import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderNavigation from "./Sider";
const { Header, Content } = Layout;

export default class SiderLayout extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderNavigation width={200} className="site-layout-background" />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              { this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}