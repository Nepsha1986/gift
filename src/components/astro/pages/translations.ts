import type { Translations } from "@i18n/ui.ts";
export type ContactPageTranslations =
  | "page.title"
  | "page.heading"
  | "form.title"
  | "form.subtitle";

const translations: Translations<ContactPageTranslations> = {
  en: {
    "page.title": "Contacts",
    "page.heading": "Have a question or need assistance?",
    "form.title": "Send us a message",
    "form.subtitle":
      "We'll do our best to respond to your inquiries promptly. Your feedback and inquiries are important to us!",
  },
  ru: {
    "page.title": "Конакты",
    "page.heading": "У вас есть вопроссы или нужна помощь?",
    "form.title": "Отправьте нам сообщение",
    "form.subtitle":
      "Мы сделаем все возможное, чтобы оперативно ответить на ваши запросы. Ваши отзывы и запросы важны для нас!",
  },
  uk: {
    "page.title": "Контакти",
    "page.heading": "У вас є питання або потрібна допомога?",
    "form.title": "Надішліть нам повідомлення",
    "form.subtitle":
      "Ми зробимо все можливе, щоб оперативно відповісти на ваші запити. Ваші відгуки і запити важливі для нас!",
  },
};

export default translations;
