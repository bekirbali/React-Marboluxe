import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationTR from "./locales/tr.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: translationEN,
    },
    tr: {
      translation: translationTR,
    },
  },
  fallbackLng: "en", // Desteklenmeyen bir dildeyse kullanılacak dil
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
