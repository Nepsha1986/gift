import nav, { type NavTranslationStrings } from "./translations/navigation.ts";
import categories, {
  type CategoriesTranslationStrings,
} from "./translations/categories.ts";
import shared, { type SharedStrings } from "@i18n/translations/shared.ts";
import seo, { type SeoStrings } from "@i18n/translations/seo.ts";

export const showDefaultLang = true;
export const languages = {
  en: "English",
  ru: "Русский",
};

export const defaultLang = "en";

export type AppTranslationStrings =
  | NavTranslationStrings
  | CategoriesTranslationStrings
  | SharedStrings
  | SeoStrings;

export const ui: Record<
  keyof typeof languages,
  Record<AppTranslationStrings, string>
> = {
  en: {
    ...seo.en,
    ...nav.en,
    ...categories.en,
    ...shared.en,
  },
  ru: {
    ...seo.ru,
    ...nav.ru,
    ...categories.ru,
    ...shared.ru,
  },
};
