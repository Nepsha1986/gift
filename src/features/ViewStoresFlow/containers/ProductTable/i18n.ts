import type { Translations } from "@i18n/ui.ts";

type RelatedProductsTranslations =
  | "label.choose_language"
  | "label.choose_location"
  | "label.country"
  | "label.language";

const i18n: Translations<RelatedProductsTranslations> = {
  en: {
    "label.choose_language": "Choose your language",
    "label.choose_location": "Choose your location",
    "label.country": "Country",
    "label.language": "Language",
  },
  ru: {
    "label.choose_language": "Выберите ваш язык",
    "label.choose_location": "Выберите ваше местоположение",
    "label.country": "Страна",
    "label.language": "Язык",
  },
  uk: {
    "label.choose_language": "Виберіть свою мову",
    "label.choose_location": "Виберіть своє місцезнаходження",
    "label.country": "Країна",
    "label.language": "Мова",
  },
};

export default i18n;
