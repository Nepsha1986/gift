import { type ui, type SupportedLanguages, type Translations } from "./ui";

export function getLangFromUrl(url: string): SupportedLanguages {
  return url.split("/")[1] as SupportedLanguages;
}

export function getLangFromSlug(slug: string): SupportedLanguages {
  return slug.split("/")[0] as SupportedLanguages;
}

export function getCleanSlug(slug: string): string {
  return slug.split("/").slice(-1)[0];
}

export function useTranslations<T extends string>(
  lang: SupportedLanguages,
  translations: Translations<T>,
) {
  return function t(key: T): string {
    return translations[lang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path !== "/" ? path : ""}`;
  };
}
