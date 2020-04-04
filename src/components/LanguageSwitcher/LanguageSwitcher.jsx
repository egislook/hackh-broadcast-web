import React from 'react';

const LanguageSwitcher = () => (
  <div className="langauge-switcher flex flex-row">
    <div className="img-wrapper w-6 h-4 mx-1 border border-solid border-white rounded-sm cursor-pointer">
      <img className="h-full w-full" src="/flag-cambodia.jpg" alt="Khmer" />
    </div>
    <div className="img-wrapper w-6 h-4 mx-1 border border-solid border-white rounded-sm cursor-pointer">
      <img className="h-full w-full" src="/flag-british.jpg" alt="English" />
    </div>
  </div>
);

export default LanguageSwitcher;
