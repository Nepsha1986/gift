import type { Translations } from "@i18n/ui.ts";

type FeaturedIdeasTranslations = "section.heading" | "section.subheading";

const translations: Translations<FeaturedIdeasTranslations> = {
  en: {
    "section.heading": "Featured",
    "section.subheading":
      "Elevate your gift-giving experience with our featured picks that promise inspiration, delight, and a lasting impression.",
  },
  ru: {
    "section.heading": "Избранные",
    "section.subheading":
      "Повысьте уровень вашего опыта в дарении подарков с нашими лучшими выборами, которые обещают вдохновение, восторг и непередаваемое впечатление.",
  },
  uk: {
    "section.heading": "Обрані",
    "section.subheading":
      "Підніміть рівень свого досвіду в даруванні подарунків з нашими обраними варіантами, які обіцяють надихання, захоплення і тривале враження.",
  },
};

export default translations;
