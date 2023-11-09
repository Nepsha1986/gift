import { type Translations } from "@i18n/ui.ts";

export type NavTranslationStrings = "nav.gifts" | "nav.about" | "nav.contacts";

const nav: Translations<NavTranslationStrings> = {
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
  uk: {
    "nav.gifts": "Подарунки",
    "nav.about": "Про нас",
    "nav.contacts": "Контакти",
  },
};

export default nav;
