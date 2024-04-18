import type { Translations } from "@i18n/ui.ts";

export type PostsPageTranslations = "page.heading" | "page.subheading";

const translations: Translations<PostsPageTranslations> = {
  en: {
    "page.heading": "Recent Posts",
    "page.subheading":
      "Welcome to the articles page of <strong>gift-idea.co</strong> portal! Here you will find a rich selection of useful and inspiring articles about gifts, holidays, and everything related to gifts and festive events.",
  },
  ru: {
    "page.heading": "Последние статьи",
    "page.subheading":
      "Добро пожаловать на страницу статей портала <strong>gift-idea.co</strong>! У нас вы найдете богатый выбор полезных и вдохновляющих статей о подарках, праздниках и всем, что связано с подарками и праздничными мероприятиями.",
  },
  uk: {
    "page.heading": "Останні статті",
    "page.subheading":
      "Ласкаво просимо на сторінку статей порталу <strong>gift-idea.co</strong>! Тут ви знайдете широкий вибір корисних та натхненних статей про подарунки, свята та все, що пов'язано з подарунками та святковими заходами.",
  },
};

export default translations;
