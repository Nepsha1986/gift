import { giftsAPI } from "./api.ts";

export interface Product {
  title: string;
  description: string;
  link: string;
}

export interface IdeaDto {
  id: string;
  name: string;
  locale: string;
  lang: string;
  products: Product[];
}
interface IdeasService {
  getAll: () => Promise<IdeaDto[]>;
  get: (refID: string) => Promise<IdeaDto>;
}

const ideasService: IdeasService = {
  getAll: async () => {
    const { data } = await giftsAPI.get("/ideas");

    return data;
  },

  get: async function (refID: string) {
    const { data } = await giftsAPI.get(`/ideas/${refID}`);

    return data;
  },
};

export default ideasService;
