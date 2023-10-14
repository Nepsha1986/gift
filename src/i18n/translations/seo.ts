import { languages } from "@i18n/ui.ts";

export type SeoStrings = "seo.description" | "seo.keywords";
const seo: Record<keyof typeof languages, Record<SeoStrings, string>> = {
  en: {
    "seo.description":
      "Discover thoughtful gift ideas for every occasion and recipient at our Gift Idea Hub. Explore our curated gift guides and tips to make gift-giving a breeze.",
    "seo.keywords":
      "gift ideas, unique gift, gift ideas for men, gift ideas for women, gift ideas for kids, gift ideas for teens",
  },
  ru: {
    "seo.description":
      "Познакомьтесь с нашими подобранными подарками и советами, чтобы сделать дарение подарков легким и приятным процессом.",
    "seo.keywords":
      "Идеи подарков, уникальные подарки, идеи подарков для мужчин, идеи подарков для женщин, идеи подарков для детей, идеи подарков для подростков.",
  },
};

export default seo;
