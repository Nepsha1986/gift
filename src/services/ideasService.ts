import { giftsAPI } from "./api.ts";

export interface Product {
  title: string;
  description: string;
  link: string;
}

export interface IdeaDto {
  _id: string;
  _ref_id: string;
  locale: string;
  products: Product[];
}

type IdeasReqParams = {
  _ref_id?: string;
  locale?: string;
};
interface IdeasService {
  getAll: (params?: IdeasReqParams) => Promise<IdeaDto[]>;
  get: (id: string) => Promise<IdeaDto>;
  add: (idea: Omit<IdeaDto, "_id">) => Promise<void>;
}

const ideasService: IdeasService = {
  getAll: async (params) => {
    const { data } = await giftsAPI.get("api/v1/ideas", {
      params,
    });

    return data;
  },

  get: async (id: string) => {
    const { data } = await giftsAPI.get(`api/v1/ideas/${id}`);

    return data;
  },

  add: async (idea) => {
    return await giftsAPI.post("api/v1/ideas", idea);
  },
};

export default ideasService;
