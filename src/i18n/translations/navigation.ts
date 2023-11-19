import { type Translations } from "@i18n/ui.ts";

export type NavTranslationStrings =
  | "nav.gifts"
  | "nav.about"
  | "nav.contacts"
  | "nav.homepage";

const nav: Translations<NavTranslationStrings> = {
  en: {
    "nav.homepage": "Homepage",
    "nav.gifts": "Gifts",
    "nav.about": "About",
    "nav.contacts": "Contacts",
  },
  ru: {
    "nav.homepage": "Главная",
    "nav.gifts": "Идеи",
    "nav.about": "O проекте",
    "nav.contacts": "Контакты",
  },
  uk: {
    "nav.homepage": "Головна",
    "nav.gifts": "Подарунки",
    "nav.about": "Про проект",
    "nav.contacts": "Контакти",
  },
};

export default nav;
