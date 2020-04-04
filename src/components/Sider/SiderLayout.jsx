/* eslint-disable */
import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderNavigation from "./Sider";
import Header from "../Header/Header";
const { Content } = Layout;

export default class SiderLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,

    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderNavigation width={200} className="site-layout-background" />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              { this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}