import { type languages } from "@i18n/ui.ts";

export type NavTranslationStrings = "nav.gifts" | "nav.about" | "nav.contacts";

const nav: Record<
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

export default nav;
