import React from 'react';
import { Layout, Divider } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import AvatarPanel from '../AvatarPanel/AvatarPanel';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const { Header: AntHeader } = Layout;
const Header = ({ image = '', name = 'John Doe' }) => (
  <AntHeader className="flex flex-row items-center overflow-hidden  p-8" style={{ padding: 0 }}>
    <h1 className="text-white text-xl mr-auto">COVID-19 Broadcasting System for The Kingdom of Cambodia</h1>
    <LanguageSwitcher />
    <AvatarPanel image={image} name={name} className="px-2" />
    <Divider type="vertical" className="h-10" />
    <PoweroffOutlined className="text-xl text-white px-2 cursor-pointer" />
  </AntHeader>
);

export default Header;
