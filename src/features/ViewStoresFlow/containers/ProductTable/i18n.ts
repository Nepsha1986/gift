import type { Translations } from "@i18n/ui.ts";

type RelatedProductsTranslations =
  | "label.choose_language"
  | "label.choose_location"
  | "label.country"
  | "label.language"
  | "m.no_related_products";

const i18n: Translations<RelatedProductsTranslations> = {
  en: {
    "label.choose_language": "Choose your language",
    "label.choose_location": "Choose your location",
    "label.country": "Country",
    "label.language": "Language",
    "m.no_related_products":
      "We are sorry, but currently there are no products in the list. We are working on adding this feature, and it will be available soon.",
  },
  ru: {
    "label.choose_language": "Выберите ваш язык",
    "label.choose_location": "Выберите ваше местоположение",
    "label.country": "Страна",
    "label.language": "Язык",
    "m.no_related_products":
      "Извините, но в данный момент в списке нет товаров. Мы работаем над добавлением этой функции, и она будет доступна в ближайшее время.",
  },
  uk: {
    "label.choose_language": "Виберіть свою мову",
    "label.choose_location": "Виберіть своє місцезнаходження",
    "label.country": "Країна",
    "label.language": "Мова",
    "m.no_related_products":
      "Вибачте, але наразі у списку немає жодних товарів. Ми працюємо над додаванням цієї функції, і вона буде доступна найближчим часом.",
  },
};

export default i18n;
