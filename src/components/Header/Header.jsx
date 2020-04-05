import React from 'react';
import { Layout, Divider, Modal } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


// import AvatarPanel from '../AvatarPanel/AvatarPanel';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import api from '../../utils/api';

const { confirm } = Modal;

const showConfirm = (title, okText, cancelText) => {
  confirm({
    title,
    // content: 'Some descriptions',
    async onOk() {
      await api.logout();
      localStorage.clear();
      window.location.href = '/';
    },
    onCancel() {
      console.log('Cancel');
    },
    okText,
    cancelText,
  });
};


const { Header: AntHeader } = Layout;
const Header = () => {
  const { t } = useTranslation();

  return (
    <AntHeader className="flex flex-row items-center overflow-hidden  p-8" style={{ padding: 0 }}>
      <h1 className="text-white text-xl mr-auto">{t('app_title')}</h1>
      <LanguageSwitcher />
      {/* <AvatarPanel image={image} name={name} className="px-2" /> */}
      <Divider type="vertical" className="h-10" />
      <PoweroffOutlined className="text-xl text-white px-2 cursor-pointer" onClick={() => showConfirm(t('logout_title'), t('ok'), t('cancel'))} />
    </AntHeader>
  );
};

export default Header;
