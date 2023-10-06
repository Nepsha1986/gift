export const showDefaultLang = false;
export const languages = {
  en: "English",
  ru: "Русский",
};

export const defaultLang = "en";

export type NavTranslationStrings = "nav.gifts" | "nav.about" | "nav.contacts";

export const ui: Record<
  keyof typeof languages,
  Record<NavTranslationStrings, string>
> = {
  en: {
    "nav.gifts": "Gifts",
    "nav.about": "About",
    "nav.contacts": "Contacts",
  },
  ru: {
    "nav.gifts": "Идеи",
    "nav.about": "O нас",
    "nav.contacts": "Контакты",
  },
};