import type { Category } from "../../types/category.ts";
import type { Translations } from "@i18n/ui.ts";

// Short category labels for compact tab switchers.
const categoryTabs: Translations<Category> = {
  en: {
    "for-women": "Women",
    "for-men": "Men",
    "for-kids": "Kids",
    "for-teens": "Teens",
  },
  ru: {
    "for-women": "Женщинам",
    "for-men": "Мужчинам",
    "for-kids": "Детям",
    "for-teens": "Подросткам",
  },
  uk: {
    "for-women": "Жінкам",
    "for-men": "Чоловікам",
    "for-kids": "Дітям",
    "for-teens": "Підліткам",
  },
};

export default categoryTabs;
