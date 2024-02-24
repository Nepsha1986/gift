import type { Authors } from "@src/types/author.ts";

import alexPhoto from "src/assets/authors/alex-nepsha.webp";
import polinaPhoto from "src/assets/authors/polina-gordienko.webp";

export const authors: Authors = {
  alex_nepsha: {
    fullName: "Alex Nepsha",
    link: "https://www.linkedin.com/in/alex-nepsha-851a23115/",
    photo: alexPhoto,
  },
  polina_gordienko: {
    fullName: "Polina Gordienko",
    link: "https://freelance.ua/user/polina1818/",
    photo: polinaPhoto,
  },
};
