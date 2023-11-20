import type { Translations } from "@i18n/ui.ts";

type ContactFormTranslations =
  | "btn.text"
  | "field.name"
  | "field.email"
  | "field.message"
  | "success_message"
  | "error_message";

const translations: Translations<ContactFormTranslations> = {
  en: {
    "field.name": "Name",
    "field.email": "Email",
    "field.message": "Message",
    success_message: "Your message has been sent. We will contact you shortly",
    error_message: "Something went wrong, please try again later.",
    "btn.text": "Send",
  },
  ru: {
    "field.name": "Имя",
    "field.email": "Электронная почта",
    "field.message": "Сообщение",
    success_message:
      "Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время",
    error_message: "Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.",
    "btn.text": "Отправить",
  },
  uk: {
    "field.name": "Ім'я",
    "field.email": "Електронна пошта",
    "field.message": "Повідомлення",
    success_message:
      "Ваше повідомлення відправлено. Ми зв'яжемося з вами найближчим часом",
    error_message: "Щось пішло не так, будь ласка, спробуйте ще раз пізніше.",
    "btn.text": "Відправити",
  },
};

export default translations;
