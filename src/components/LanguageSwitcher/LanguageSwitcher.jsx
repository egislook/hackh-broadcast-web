import React from 'react';
import i18next from "i18next";

const changeLanguage = (lang) => {
  console.log('lang', lang);
  i18next.changeLanguage(lang);
};

const LanguageSwitcher = () => {
    return(
        <div className="langauge-switcher flex flex-row">
            <div className="img-wrapper w-6 h-4 mx-1 border border-solid border-white rounded-sm cursor-pointer" onClick={() => changeLanguage('km')}>
                <img className="h-full w-full" src="/flag-cambodia.jpg" alt="Khmer"/>
            </div>
            <div className="img-wrapper w-6 h-4 mx-1 border border-solid border-white rounded-sm cursor-pointer" onClick={() => changeLanguage('en')}>
                <img className="h-full w-full" src="/flag-british.jpg" alt="English"/>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
