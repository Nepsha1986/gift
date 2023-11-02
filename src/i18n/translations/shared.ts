import { type languages } from "@i18n/ui.ts";
export type SharedStrings = "s.category" | "s.age" | "s.gift_idea";
const shared: Record<keyof typeof languages, Record<SharedStrings, string>> = {
  en: {
    "s.gift_idea": "gift idea",
    "s.category": "category",
    "s.age": "age",
  },
  ru: {
    "s.gift_idea": "идея подарка",
    "s.category": "категория",
    "s.age": "возраст",
  },
  uk: {
    "s.gift_idea": "ідея подарунка",
    "s.category": "категорія",
    "s.age": "вік",
  },
};

export default shared;
