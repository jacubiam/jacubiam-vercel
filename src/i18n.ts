import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./translation/English.json";
import Spanish from "./translation/Spanish.json";

const resources = {
    en: {
        translation: English,
    },
    es: {
        translation: Spanish,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
});

export default i18n;