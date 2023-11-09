import type { SupportedLanguages } from "@i18n/ui.ts";
export type SupportedCountries = "US" | "UA";

export type SupportedLocales = Record<SupportedCountries, SupportedLanguages[]>;

export const locales: SupportedLocales = {
  US: ["en"],
  UA: ["ru", "uk"],
};

export const getLocale = (
  language: SupportedLanguages,
  country: SupportedCountries,
): string => {
  if (locales[country] && locales[country].includes(language)) {
    return `${language}-${country}`;
  } else {
    throw new Error(
      `Unsupported country or language combination: ${country}-${language}`,
    );
  }
};
