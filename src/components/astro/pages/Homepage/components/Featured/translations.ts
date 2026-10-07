import type { Translations } from "@i18n/ui.ts";

export type FeaturedIdeasTranslations =
  | "section.eyebrow"
  | "section.heading"
  | "section.subheading"
  | "section.btn_text";

const translations: Translations<FeaturedIdeasTranslations> = {
  en: {
    "section.eyebrow": "Editors’ picks",
    "section.heading":
      "Ideas we’d <span class='scribble'>gift</span> ourselves",
    "section.subheading":
      "Our favourite <strong>gift ideas</strong> for every recipient — from cozy little things to unforgettable experiences.",
    "section.btn_text": "View all ideas",
  },
  ru: {
    "section.eyebrow": "Выбор редакции",
    "section.heading":
      "Идеи, которые мы бы <span class='scribble'>подарили</span> сами",
    "section.subheading":
      "Наши любимые <strong>идеи подарков</strong> для каждого — от уютных мелочей до незабываемых впечатлений.",
    "section.btn_text": "Смотреть все идеи",
  },
  uk: {
    "section.eyebrow": "Вибір редакції",
    "section.heading":
      "Ідеї, які ми б <span class='scribble'>подарували</span> самі",
    "section.subheading":
      "Наші улюблені <strong>ідеї подарунків</strong> для кожного — від затишних дрібниць до незабутніх вражень.",
    "section.btn_text": "Переглянути всі ідеї",
  },
};

export default translations;
