import type { Translations } from "@i18n/ui.ts";
export type SharedStrings = "s.category" | "s.age" | "s.gift_idea";

const shared: Translations<SharedStrings> = {
  en: {
    "s.gift_idea": "Gift idea",
    "s.category": "category",
    "s.age": "age",
  },
  ru: {
    "s.gift_idea": "Идея подарка",
    "s.category": "категория",
    "s.age": "возраст",
  },
  uk: {
    "s.gift_idea": "Ідея подарунка",
    "s.category": "категорія",
    "s.age": "вік",
  },
};

export default shared;
