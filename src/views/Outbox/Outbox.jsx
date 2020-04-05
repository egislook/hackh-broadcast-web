import React from 'react';
import SiderLayout from '../../components/Sider/SiderLayout';

import SectionTab from '../index-sections/SectionTab.jsx';

const Outbox = () => (
  <SiderLayout>
    <div className="content flex flex-row h-full">
      <SectionTab />
    </div>
  </SiderLayout>
);

export default Outbox;
