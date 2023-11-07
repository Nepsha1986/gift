import { giftsAPI } from "./api.ts";

export interface Product {
  title: string;
  description: string;
  link: string;
}

export interface IdeaDto {
  _id: string;
  _ref_id: string;
  products: Product[];
}
interface IdeasService {
  getAll: () => Promise<IdeaDto[]>;
  get: (refID: string) => Promise<IdeaDto>;
  add: (idea: Omit<IdeaDto, "_id">) => Promise<void>;
}

const ideasService: IdeasService = {
  getAll: async () => {
    const { data } = await giftsAPI.get("api/v1/ideas");

    return data;
  },

  get: async (refID: string) => {
    const { data } = await giftsAPI.get(`api/v1/ideas/${refID}`);

    return data;
  },

  add: async (idea) => {
    return await giftsAPI.post("api/v1/ideas", idea);
  },
};

export default ideasService;
