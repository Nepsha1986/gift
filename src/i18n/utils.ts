import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: string): keyof typeof ui {
  const lang = url.split("/")[1];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangFromSlug(slug: string): keyof typeof ui {
  const lang = slug.split("/")[0];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getCleanSlug(slug: string): string {
  return slug.split("/").slice(-1)[0];
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path !== "/" ? path : ""}`;
  };
}
