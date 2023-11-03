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
  get: (name: string) => Promise<IdeaDto>;
}

const ideasService: IdeasService = {
  getAll: async () => {
    const { data } = await giftsAPI.get("/ideas");

    return data;
  },

  get: async function (name: string) {
    const { data } = await giftsAPI.get(`/ideas/${name}`);

    return data;
  },
};

export default ideasService;
