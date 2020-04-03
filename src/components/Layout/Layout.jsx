import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Layout = ({ title, Children }) => (
  <div className="layout-container">
    <Header title={title} />
    <>
      {
        Children
      }
    </>
    <BottomNavigation />
  </div>
);

export default Layout;
