import { languages } from "@i18n/ui.ts";
export type SharedStrings = "s.category" | "s.age";
const shared: Record<keyof typeof languages, Record<SharedStrings, string>> = {
  en: {
    "s.category": "category",
    "s.age": "age",
  },
  ru: {
    "s.category": "категория",
    "s.age": "возраст",
  },
};

export default shared;
