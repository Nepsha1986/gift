import { giftsAPI } from "./api.ts";
import type {
  PageableRes,
  PaginatedParams,
  SearchableParams,
} from "@src/types/api.ts";

export interface ProductDto {
  _id: string;
  refId?: string;
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  locale: string;
}

interface Params extends PaginatedParams, SearchableParams {
  refId?: string;
  locale?: string;
}
interface ProductsService {
  add: (product: Omit<ProductDto, "_id">) => Promise<void>;
  get: (id: string) => Promise<ProductDto>;
  getAll: (params?: Params) => Promise<PageableRes<ProductDto>>;
  update: (id: string, product: Omit<ProductDto, "_id">) => Promise<ProductDto>;
  delete: (id: string) => Promise<void>;
}

const productsService: ProductsService = {
  get: async (id: string) => {
    const { data } = await giftsAPI.get(`api/v1/products/${id}`);

    return data;
  },
  update: async (id, data) => {
    return await giftsAPI.put(`api/v1/products/${id}`, data);
  },
  getAll: async (params) => {
    const { data } = await giftsAPI.get("api/v1/products", {
      params,
    });

    return data;
  },
  add: async (product) => {
    await giftsAPI.post("api/v1/products", product);
  },
  delete: async (id) => {
    await giftsAPI.delete(`api/v1/products/${id}`);
  },
};

export default productsService;
