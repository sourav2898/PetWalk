import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en/_index';
import fr from './resources/fr/_index';

const resources = { // list of languages
    en,
    fr,
};
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
        resources,
        lng: 'en', // default language to use.
        // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;