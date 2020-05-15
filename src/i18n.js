import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18n.use(Backend).use(initReactI18next).init({
  lng: "en",
  resources: {
    en,
    es,
  },
});

export default i18n;
