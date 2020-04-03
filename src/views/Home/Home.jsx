import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Covid-19 Broadcast!
        </p>
        <p>{t('Welcome to React')}</p>
      </header>
    </div>
  );
};

export default Home;
