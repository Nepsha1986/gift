import nav, { type NavTranslationStrings } from "./translations/navigation.ts";
import categories, {
  type CategoriesTranslationStrings,
} from "./translations/categories.ts";
import shared, { type SharedStrings } from "@i18n/translations/shared.ts";
import seo, { type SeoStrings } from "@i18n/translations/seo.ts";

export const languages = ["en", "ru", "uk"] as const;
export type SupportedLanguages = (typeof languages)[number];
export const locales = ["en-us", "uk-ua", "ru-ua"] as const;
export type SupportedLocales = (typeof locales)[number];

export const defaultLang = "en";

export type Translations<T extends string> = Record<
  SupportedLanguages,
  Record<T, string>
>;

export type AppTranslationStrings =
  | NavTranslationStrings
  | CategoriesTranslationStrings
  | SharedStrings
  | SeoStrings;

export const ui: Translations<AppTranslationStrings> = {
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
  uk: {
    ...seo.uk,
    ...nav.uk,
    ...categories.uk,
    ...shared.uk,
  },
};
