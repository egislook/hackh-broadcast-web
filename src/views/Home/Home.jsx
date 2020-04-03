import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="App bg-blue">
      <header className="App-header text-gray-900">
        <p>
          Covid-19 Broadcast!
        </p>
        <p>{t('Welcome to React')}</p>
      </header>
    </div>
  );
};

export default Home;
