import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english';
import khmer from './khmer';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: english,
      km: khmer,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });


i18n.changeLanguage('km-KH');
export default i18n;
