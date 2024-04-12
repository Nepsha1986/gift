import type { Translations } from "@i18n/ui.ts";
export type SharedStrings = "s.category" | "s.gift_idea";

const shared: Translations<SharedStrings> = {
  en: {
    "s.gift_idea": "Gift idea",
    "s.category": "category",
  },
  ru: {
    "s.gift_idea": "Идея подарка",
    "s.category": "категория",
  },
  uk: {
    "s.gift_idea": "Ідея подарунка",
    "s.category": "категорія",
  },
};

export default shared;
