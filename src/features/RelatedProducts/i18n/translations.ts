import type { Translations } from "@i18n/ui.ts";

type RelatedProductsTranslations =
  | "related_products_text"
  | "related_products_action"
  | "dialog.heading";

const all: Translations<RelatedProductsTranslations> = {
  en: {
    related_products_text:
      "Our team has prepared a list of products that could interest you",
    related_products_action: "click to view",
    "dialog.heading": "Happy gift-hunting!",
  },
  ru: {
    related_products_text:
      "Наша команда подготовила список продуктов, которые могут вас заинтересовать",
    related_products_action: "нажмите, чтобы посмотреть",
    "dialog.heading": "Приятного поиска подарков!",
  },
  uk: {
    related_products_text:
      "Наша команда підготувала список продуктів, які можуть вас зацікавити",
    related_products_action: "натисніть, щоб переглянути",
    "dialog.heading": "Приємного пошуку подарунків!",
  },
};

export default all;
