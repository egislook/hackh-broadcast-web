import React from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

const { SubMenu } = Menu;

const SiderNavigation = () => {
  const { t } = useTranslation();
  return (
    <Sider>
      <div style={{ width: '100px', margin: '20px 0px 20px 0px', transform: `translate(${50}%` }}>
        <Link to="/">
          <img className="h-full w-full border border-solid border-white rounded-sm cursor-pointer" src="/flag-cambodia.jpg" alt="Khmer" />
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="messages"
          title={(
            <span>
              <Icon component={() => (<img src="/mail.svg" alt="message" />)} />
              Messages
            </span>
            )}
        >
          <Menu.Item key="outbox"><Link to="/outbox">{t('Outbox')}</Link></Menu.Item>
          <Menu.Item disabled key="draft"><Link to="/drafts">{t('Drafts')}</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="messenger"
          title={(
            <span>
              <Icon component={() => (<img src="/messenger.svg" alt="messenger" />)} />
              Messenger
            </span>
            )}
        >
          <Menu.Item key="text-only"><Link to="/messenger-text">{t('Text')}</Link></Menu.Item>
          <Menu.Item disabled key="text-with-button"><Link to="/messenger-text-button">{t('Text + buttons')}</Link></Menu.Item>
          <Menu.Item disabled key="image-with-button"><Link to="/messenger-image-button">{t('Image + buttons')}</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="telegram"
          title={(
            <span>
              <Icon component={() => (<img src="/telegram.svg" alt="telegram" />)} />
              Telegram
            </span>
            )}
        >
          <Menu.Item key="style-1"><Link to="/telegram-style-1">{t('Style 1')}</Link></Menu.Item>
          <Menu.Item disabled key="style-2"><Link to="/telegram-style-2">{t('Style 2')}</Link></Menu.Item>
          <Menu.Item disabled key="style-3"><Link to="/telegram-style-3">{t('Style 3')}</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sms"
          title={(
            <span>
              <Icon component={() => (<img src="/sms.svg" alt="sms" />)} />
              SMS
            </span>
            )}
        >
          <Menu.Item disabled key="sms-text"><Link to="/sms-text">{t('Text')}</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderNavigation;
