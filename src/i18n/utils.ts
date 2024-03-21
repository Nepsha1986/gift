import {
  type SupportedLanguages,
  type Translations,
  defaultLang,
  type SupportedLocales,
} from "./ui";

export function getLangFromUrl(url: string): SupportedLanguages {
  return url.split("/")[1].split("-")[0] as SupportedLanguages;
}

export function getLocaleFromUrl(url: string): SupportedLocales {
  return url.split("/")[1] as SupportedLocales;
}

export function getLangFromSlug(slug: string): SupportedLanguages {
  return slug.split("/")[0].split("-")[0] as SupportedLanguages;
}

export function getLocaleFromSlug(slug: string): SupportedLocales {
  return slug.split("/")[0] as SupportedLocales;
}

export function getCleanSlug(slug: string): string {
  return slug.split("/").slice(-1)[0];
}

export function useTranslations<T extends string>(
  lang: SupportedLanguages,
  translations: Translations<T>,
) {
  return function t(key: T): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function useTranslatedPath(locale: SupportedLocales) {
  return function translatePath(path: string, l: string = locale) {
    return `/${l}${path !== "/" ? path : ""}`;
  };
}
