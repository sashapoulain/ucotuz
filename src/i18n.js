
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en', 'de'],
    ns: ['about', 'header'], 
    // defaultNS: 'common', 
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/ucotuz/locales/{{lng}}/{{ns}}.json', 
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;
