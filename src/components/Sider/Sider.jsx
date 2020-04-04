import React, { Component } from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;

const { SubMenu } = Menu;

class SiderNavigation extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Sider {...this.props}>
        <div style={{ height: "80px", margin: "20px" }}>
          <img src="/flag-cambodia.jpg" alt="image" style={{maxHeight:"100%", margin: "auto" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="messages"
            title={
              <span>
                <Icon component={() => (<img src="/mail.svg"/>)} />
                Messages
              </span>
            }
          >
            <Menu.Item key="outbox"><Link to="/outbox">Outbox</Link></Menu.Item>
            <Menu.Item key="draft"><Link to="/drafts">Drafts</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="messenger"
            title={
              <span>
                <Icon component={() => (<img src="/messenger.svg"/>)} />
                Messenger
              </span>
            }
          >
            <Menu.Item key="text-only"><Link to="/messenger-text">Text</Link></Menu.Item>
            <Menu.Item key="text-with-button"><Link to="/messenger-text-button">Text + buttons</Link></Menu.Item>
            <Menu.Item key="image-with-button"><Link to="/messenger-image-button">Image + buttons</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="telegram"
            title={
              <span>
                <Icon component={() => (<img src="/telegram.svg"/>)} />
                Telegram
              </span>
            }
          >
            <Menu.Item key="style-1"><Link to="/telegram-style-1">Style 1</Link></Menu.Item>
            <Menu.Item key="style-2"><Link to="/telegram-style-2">Style 2</Link></Menu.Item>
            <Menu.Item key="style-3"><Link to="/telegram-style-3">Style 3</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sms"
            title={
              <span>
                <Icon component={() => (<img src="/sms.svg"/>)} />
                SMS
              </span>
            }
          >
            <Menu.Item key="sms-text"><Link to="/sms-text">Text</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default SiderNavigation;