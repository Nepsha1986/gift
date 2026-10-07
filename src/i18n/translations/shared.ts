import type { Translations } from "@i18n/ui.ts";
export type SharedStrings =
  | "s.category"
  | "s.gift_idea"
  | "s.tagline"
  | "s.rights"
  | "s.share_with"
  | "s.by"
  | "s.view_all_ideas"
  | "s.footer_cta_title"
  | "s.footer_cta_btn"
  | "s.footer_nav";

const shared: Translations<SharedStrings> = {
  en: {
    "s.gift_idea": "Gift idea",
    "s.category": "category",
    "s.tagline":
      "Thoughtful gift ideas for women, men, teens and kids — for every occasion.",
    "s.rights": "All rights reserved.",
    "s.share_with": "Share with",
    "s.by": "By",
    "s.view_all_ideas": "All ideas",
    "s.footer_cta_title": "Know a gift that never fails? Tell us about it",
    "s.footer_cta_btn": "Share an idea",
    "s.footer_nav": "Explore",
  },
  ru: {
    "s.gift_idea": "Идея подарка",
    "s.category": "категория",
    "s.tagline":
      "Идеи подарков для женщин, мужчин, подростков и детей — на любой повод.",
    "s.rights": "Все права защищены.",
    "s.share_with": "Поделиться",
    "s.by": "Автор:",
    "s.view_all_ideas": "Все идеи",
    "s.footer_cta_title":
      "Знаете подарок, который всегда радует? Расскажите нам",
    "s.footer_cta_btn": "Поделиться идеей",
    "s.footer_nav": "Навигация",
  },
  uk: {
    "s.gift_idea": "Ідея подарунка",
    "s.category": "категорія",
    "s.tagline":
      "Ідеї подарунків для жінок, чоловіків, підлітків і дітей — на будь-який привід.",
    "s.rights": "Усі права захищені.",
    "s.share_with": "Поділитися",
    "s.by": "Автор:",
    "s.view_all_ideas": "Усі ідеї",
    "s.footer_cta_title": "Знаєте подарунок, який завжди тішить? Розкажіть нам",
    "s.footer_cta_btn": "Поділитися ідеєю",
    "s.footer_nav": "Навігація",
  },
};

export default shared;
