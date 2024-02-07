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
  get: (id: string) => Promise<ProductDto>;
  getAll: (params?: Params) => Promise<PageableRes<ProductDto>>;
}

const productsService: ProductsService = {
  get: async (id: string) => {
    const { data } = await giftsAPI.get(`api/v1/products/${id}`);

    return data;
  },
  getAll: async (params) => {
    const { data } = await giftsAPI.get("api/v1/products", {
      params,
    });

    return data;
  },
};

export default productsService;
