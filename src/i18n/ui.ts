import nav, { type NavTranslationStrings } from "./translations/navigation.ts";
import categories, {
  type CategoriesTranslationStrings,
} from "./translations/categories.ts";
import shared, { type SharedStrings } from "@i18n/translations/shared.ts";

export const showDefaultLang = false;
export const languages = {
  en: "English",
  ru: "Русский",
};

export const defaultLang = "en";

export type AppTranslationStrings =
  | NavTranslationStrings
  | CategoriesTranslationStrings
  | SharedStrings;

export const ui: Record<
  keyof typeof languages,
  Record<AppTranslationStrings, string>
> = {
  en: {
    ...nav.en,
    ...categories.en,
    ...shared.en,
  },
  ru: {
    ...nav.ru,
    ...categories.ru,
    ...shared.ru,
  },
};
