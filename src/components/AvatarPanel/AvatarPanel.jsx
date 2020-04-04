import React from 'react';
import { Avatar, Popover, Menu } from 'antd';


const UserMenu = ({ openKeys, onOpenChange }) => (
  <Menu
    mode="inline"
    openKeys={openKeys}
    onOpenChange={onOpenChange}
    style={{ width: 256 }}
  >
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
    <Menu.Item key="4">Option 4</Menu.Item>
  </Menu>
);
const AvatarPanel = ({ image, name, className }) => (
  <Popover content={<UserMenu openKeys={['123']} />} trigger="click">
    <div className={`flex flex-row avatar-info-panel items-center hover:bg-gray-800 cursor-pointer ${className}`}>
      <h4 className="text-white p-2 m-0">{name}</h4>
      <Avatar size="large" src={image} />
    </div>
  </Popover>
);

export default AvatarPanel;
