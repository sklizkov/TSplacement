import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";

const DEFAULT_LANGUAGE = "en";

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18n;
