import type { Translations } from "@i18n/ui.ts";

export type LatestPostsTranslations =
  | "section.eyebrow"
  | "section.heading"
  | "section.all";

const translations: Translations<LatestPostsTranslations> = {
  en: {
    "section.eyebrow": "Guides & stories",
    "section.heading": "Fresh from the blog",
    "section.all": "All posts",
  },
  ru: {
    "section.eyebrow": "Советы и истории",
    "section.heading": "Свежее в блоге",
    "section.all": "Все статьи",
  },
  uk: {
    "section.eyebrow": "Поради та історії",
    "section.heading": "Свіже в блозі",
    "section.all": "Усі статті",
  },
};

export default translations;
