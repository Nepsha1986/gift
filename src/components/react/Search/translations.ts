import type { Translations } from "@i18n/ui.ts";

type SearchTranslations = "search.heading" | "search.term";

const translations: Translations<SearchTranslations> = {
  en: {
    "search.heading": "Search",
    "search.term": "Type your search term",
  },
  ru: {
    "search.heading": "Поиск",
    "search.term": "Введите свой поисковый запрос",
  },
  uk: {
    "search.heading": "Пошук",
    "search.term": "Введіть свій пошуковий запит",
  },
};

export default translations;
