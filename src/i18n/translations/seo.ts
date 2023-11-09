import { type Translations } from "@i18n/ui.ts";

export type SeoStrings = "seo.description" | "seo.keywords";
const seo: Translations<SeoStrings> = {
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
  uk: {
    "seo.description":
      "Відкрийте для себе роздумливі ідеї для подарунків на будь-яку нагоду та отримувача в нашому Центрі ідей для подарунків. Досліджуйте наші підібрані підказки та підказки для подарунків, щоб полегшити процес подарунків.",
    "seo.keywords":
      "ідеї для подарунків, унікальні подарунки, ідеї для подарунків для чоловіків, ідеї для подарунків для жінок, ідеї для подарунків для дітей, ідеї для подарунків для підлітків",
  },
};

export default seo;
