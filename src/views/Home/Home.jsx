import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-named-as-default-member
import SiderLayout from '../../components/Sider/SiderLayout';

const Home = () => {
  const { t } = useTranslation();
  return (
    <SiderLayout>
      <div className="App bg-blue">
        <header className="App-header text-gray-900">
          <p>
            Covid-19 Broadcast!
          </p>
          <p>{t('Welcome to React')}</p>
        </header>
      </div>
    </SiderLayout>
  );
};

export default Home;
