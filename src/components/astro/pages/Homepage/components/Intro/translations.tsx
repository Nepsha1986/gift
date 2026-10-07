import type { Translations } from "@i18n/ui.ts";

export type HomePageTranslations =
  | "intro.badge"
  | "intro.heading"
  | "intro.text"
  | "intro.cta"
  | "intro.cta_secondary"
  | "intro.picker"
  | "intro.editors"
  | "intro.occasions"
  | "cat.women.title"
  | "cat.men.title"
  | "cat.teens.title"
  | "cat.kids.title"
  | "cat.women"
  | "cat.men"
  | "cat.teens"
  | "cat.kids";

const translations: Translations<HomePageTranslations> = {
  en: {
    "intro.badge": "ideas for every occasion",
    "intro.heading":
      "Gifts they’ll <span class='scribble'>actually love</span>",
    "intro.text":
      "Hand-picked gift ideas for women, men, teens and kids — with honest tips on what to choose and why. No more last-minute panic.",
    "intro.cta": "Find a gift",
    "intro.cta_secondary": "Read our guides",
    "intro.picker": "Who’s it for?",
    "intro.editors": "Picked by real people, not by algorithms",
    "intro.occasions":
      "Birthday|Anniversary|New Year|Valentine’s Day|Mother’s Day|Housewarming|Graduation|Just because",
    "cat.women.title": "For her",
    "cat.men.title": "For him",
    "cat.teens.title": "For teens",
    "cat.kids.title": "For kids",
    "cat.women": "Beauty, adventures & cozy things",
    "cat.men": "Gadgets, tools & experiences",
    "cat.teens": "Trendy picks they won’t roll eyes at",
    "cat.kids": "Toys that make playtime magical",
  },
  ru: {
    "intro.badge": "идей на любой повод",
    "intro.heading":
      "Подарки, которые <span class='scribble'>точно понравятся</span>",
    "intro.text":
      "Подборки идей для женщин, мужчин, подростков и детей — с честными советами, что выбрать и почему. Больше никакой паники в последний момент.",
    "intro.cta": "Подобрать подарок",
    "intro.cta_secondary": "Читать статьи",
    "intro.picker": "Кому дарим?",
    "intro.editors": "Подбирают живые люди, а не алгоритмы",
    "intro.occasions":
      "День рождения|Годовщина|Новый год|День Валентина|8 Марта|Новоселье|Выпускной|Просто так",
    "cat.women.title": "Для неё",
    "cat.men.title": "Для него",
    "cat.teens.title": "Подросткам",
    "cat.kids.title": "Детям",
    "cat.women": "Красота, впечатления и уют",
    "cat.men": "Гаджеты, инструменты и эмоции",
    "cat.teens": "Модные вещи без закатывания глаз",
    "cat.kids": "Игрушки, от которых горят глаза",
  },
  uk: {
    "intro.badge": "ідей на будь-який привід",
    "intro.heading":
      "Подарунки, які <span class='scribble'>точно сподобаються</span>",
    "intro.text":
      "Добірки ідей для жінок, чоловіків, підлітків і дітей — з чесними порадами, що обрати і чому. Більше жодної паніки в останню хвилину.",
    "intro.cta": "Підібрати подарунок",
    "intro.cta_secondary": "Читати статті",
    "intro.picker": "Кому даруємо?",
    "intro.editors": "Підбирають живі люди, а не алгоритми",
    "intro.occasions":
      "День народження|Річниця|Новий рік|День закоханих|8 Березня|Новосілля|Випускний|Просто так",
    "cat.women.title": "Для неї",
    "cat.men.title": "Для нього",
    "cat.teens.title": "Підліткам",
    "cat.kids.title": "Дітям",
    "cat.women": "Краса, враження і затишок",
    "cat.men": "Гаджети, інструменти та емоції",
    "cat.teens": "Модні речі без закочування очей",
    "cat.kids": "Іграшки, від яких горять очі",
  },
};

export default translations;
