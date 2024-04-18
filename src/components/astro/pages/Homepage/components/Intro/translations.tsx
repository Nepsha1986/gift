import type { Translations } from "@i18n/ui.ts";

export type HomePageTranslations =
  | "intro.heading"
  | "intro.subheading"
  | "intro.text"
  | "intro.btn_text"
  | "cat.women"
  | "cat.men"
  | "cat.teens"
  | "cat.kids";

const translations: Translations<HomePageTranslations> = {
  en: {
    "intro.heading": "Gift Ideas 2024",
    "intro.subheading": "Welcome to gift-idea.co!",
    "intro.text":
      "Our mission is to take the stress out of gift shopping by offering a wide range of thoughtful and unique <a href='/en-us/gifts/for-women/adventure-experience-for-women'><strong>gift ideas</strong></a> tailored to various recipients.",
    "intro.btn_text": "VIEW IDEAS",
    "cat.women":
      "Discover perfect gifts <strong>for women</strong>! Find inspiration for every occasion.",
    "cat.men":
      "Thoughtful gift ideas <strong>for men</strong> of all tastes and interests.",
    "cat.teens":
      "Trendy and cool gift ideas for tricky-to-shop-for <strong>teens</strong>.",
    "cat.kids":
      "Delightful <strong>kid-friendly gifts </strong> for every age and interest.",
  },
  ru: {
    "intro.heading": "Идеи подарков 2024",
    "intro.subheading": "Добро пожаловать на gift-idea.co!",
    "intro.text":
      "Наша миссия - избавить вас от стресса при выборе подарков, предлагая широкий выбор заботливых и уникальных <a href='/ru-ua/gifts/for-women/adventure-experience-for-women'><strong>идей для подарков</strong></a>, подходящих для различных получателей.",
    "intro.btn_text": "СМОТРЕТЬ",
    "cat.women":
      "Идеи для любого случая. Найдите идеальный подарок <strong>для нее</strong>!",
    "cat.men":
      "Уникальные подарки <strong>для мужчин</strong> всех вкусов и интересов.",
    "cat.teens":
      "Современные и стильные идеи подарков <strong>для подростков</strong>.",
    "cat.kids":
      "Веселые подарки <strong>для детей</strong> с разными интересами.",
  },
  uk: {
    "intro.heading": "Ідеї подарунків 2024",
    "intro.subheading": "Ласкаво просимо на gift-idea.co!",
    "intro.text":
      "Наша місія - позбавити вас стресу при виборі подарунків, пропонуючи широкий вибір турботливих та унікальних <a href='/uk-ua/gifts/for-women/adventure-experience-for-women'><strong>ідей для подарунків</strong></a>, призначених для різних отримувачів.",
    "intro.btn_text": "ПЕРЕГЛЯНУТИ",
    "cat.women":
      "Знайдіть ідеальний подарунок <strong>для неї</strong>! Ідеї для будь-якого випадку.",
    "cat.men":
      "Думкові ідеї подарунків <strong>для чоловіків</strong> усіх смаків і інтересів.",
    "cat.teens":
      "Сучасні і стильні ідеї подарунків <strong>для підлітків</strong>.",
    "cat.kids":
      "Веселі подарунки <strong>для дітей</strong> з різними інтересами.",
  },
};

export default translations;
