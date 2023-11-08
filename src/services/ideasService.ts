import { giftsAPI } from "./api.ts";

export interface Product {
  title: string;
  description: string;
  link: string;
}

export interface IdeaDto {
  _id: string;
  refId: string;
  locale: string;
  products: Product[];
}

interface IdeasReqParams {
  refId?: string;
  locale?: string;
}
interface IdeasService {
  getAll: (params?: IdeasReqParams) => Promise<IdeaDto[]>;
  get: (id: string) => Promise<IdeaDto>;
  add: (idea: Omit<IdeaDto, "_id">) => Promise<void>;
  update: (id: string, idea: Omit<IdeaDto, "_id">) => Promise<IdeaDto>;
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
    await giftsAPI.post("api/v1/ideas", idea);
  },

  update: async (id, data) => {
    return await giftsAPI.put(`api/v1/ideas/${id}`, data);
  },
};

export default ideasService;
