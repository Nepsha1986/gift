import type { Translations } from "@i18n/ui.ts";

type RelatedProductsTranslations = "m.no_related_products";

const i18n: Translations<RelatedProductsTranslations> = {
  en: {
    "m.no_related_products":
      "We are sorry, but currently there are no products in the list. We are working on adding this feature, and it will be available soon.",
  },
  ru: {
    "m.no_related_products":
      "Извините, но в данный момент в списке нет товаров. Мы работаем над добавлением этой функции, и она будет доступна в ближайшее время.",
  },
  uk: {
    "m.no_related_products":
      "Вибачте, але наразі у списку немає жодних товарів. Ми працюємо над додаванням цієї функції, і вона буде доступна найближчим часом.",
  },
};

export default i18n;
