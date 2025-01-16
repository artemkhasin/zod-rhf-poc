import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Loads translations from external files
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Integrates with React
  .init({
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes output
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;

console.log('i18n initialized');