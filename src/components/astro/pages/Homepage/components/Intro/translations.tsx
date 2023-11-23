import type { Translations } from "@i18n/ui.ts";

export type HomePageTranslations =
  | "intro.heading"
  | "intro.subheading"
  | "intro.text"
  | "intro.btn_text";

const translations: Translations<HomePageTranslations> = {
  en: {
    "intro.heading": "Gift Ideas 2023",
    "intro.subheading": "Welcome to gift-idea.co!",
    "intro.text":
      "Our mission is to take the stress out of gift shopping by offering a wide range of <a href='/en-us/gifts/for-women/adventure-experience-for-women'><strong>thoughtful and unique gift ideas</strong></a> tailored to various recipients.",
    "intro.btn_text": "VIEW IDEAS",
  },
  ru: {
    "intro.heading": "Идеи подарков 2023",
    "intro.subheading": "Добро пожаловать на gift-idea.co!",
    "intro.text":
      "Наша миссия - избавить вас от стресса при выборе подарков, предлагая широкий выбор <a href='/ru-ua/gifts/for-women/adventure-experience-for-women'><strong>заботливых и уникальных идей для подарков</strong></a>, подходящих для различных получателей.",
    "intro.btn_text": "СМОТРЕТЬ",
  },
  uk: {
    "intro.heading": "Ідеї подарунків 2023",
    "intro.subheading": "Ласкаво просимо на gift-idea.co!",
    "intro.text":
      "Наша місія - позбавити вас стресу при виборі подарунків, пропонуючи широкий вибір <a href='/uk-ua/gifts/for-women/adventure-experience-for-women'><strong>турботливих та унікальних ідей для подарунків</strong></a>, призначених для різних отримувачів.",
    "intro.btn_text": "ПЕРЕГЛЯНУТИ",
  },
};

export default translations;
