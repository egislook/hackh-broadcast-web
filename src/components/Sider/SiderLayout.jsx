import React, { Component } from 'react';
import { Layout } from 'antd';
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
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              { this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}