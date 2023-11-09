import type { Category } from "../../types/category.ts";
import type { Translations } from "@i18n/ui.ts";

export type CategoriesTranslationStrings = Category;

const categories: Translations<CategoriesTranslationStrings> = {
  en: {
    "for-women": "for women",
    "for-men": "for men",
    "for-kids": "for kids",
    "for-teens": "for teens",
  },
  ru: {
    "for-women": "для женщин",
    "for-men": "для мужчин",
    "for-kids": "для детей",
    "for-teens": "для подростков",
  },
  uk: {
    "for-women": "для жінок",
    "for-men": "для чоловіків",
    "for-kids": "для дітей",
    "for-teens": "для підлітків",
  },
};

export default categories;
