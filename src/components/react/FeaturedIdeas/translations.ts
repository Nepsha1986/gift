import type { Translations } from "@i18n/ui.ts";

export type FeaturedIdeasTranslations =
  | "section.heading"
  | "section.subheading";

const translations: Translations<FeaturedIdeasTranslations> = {
  en: {
    "section.heading": "Featured",
    "section.subheading":
      "Discover the best <strong>gift ideas</strong> in our carefully curated selections. Regardless of the occasion, our compilations offer unique and inspiring gifts. Immerse yourself in a world of creativity, where each gift becomes not only an expression of care but also a special moment in the life of your loved one.",
  },
  ru: {
    "section.heading": "Избранные",
    "section.subheading":
      "Откройте для себя лучшие <strong>идеи подарков</strong> в наших тщательно отобранных рекомендациях. Независимо от повода, наши подборки предлагают уникальные и вдохновляющие подарки. Погрузитесь в мир творчества, где каждый подарок становится не только проявлением заботы, но и особым моментом в жизни вашего близкого.",
  },
  uk: {
    "section.heading": "Обрані",
    "section.subheading":
      "Відкрийте для себе найкращі <strong>ідеї подарунків</strong> у наших ретельно підібраних рекомендаціях. Незалежно від приводу, наші підбірки пропонують унікальні та надихаючі подарунки. Зануртеся в світ творчості, де кожен подарунок стає не лише вираженням турботи, але й особливим моментом у житті вашого близького.",
  },
};

export default translations;
