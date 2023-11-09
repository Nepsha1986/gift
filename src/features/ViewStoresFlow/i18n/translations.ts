import type { Translations } from "@i18n/ui.ts";

type RelatedProductsTranslations = "btn.related_products" | "dialog.heading";

const all: Translations<RelatedProductsTranslations> = {
  en: {
    "btn.related_products": "related products",
    "dialog.heading": "Happy gift-hunting!",
  },
  ru: {
    "btn.related_products": "связанные товары",
    "dialog.heading": "Приятного поиска подарков!",
  },
  uk: {
    "btn.related_products": "пов'язані товари",
    "dialog.heading": "Приємного пошуку подарунків!",
  },
};

export default all;
