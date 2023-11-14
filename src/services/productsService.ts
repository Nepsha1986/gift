import { giftsAPI } from "./api.ts";

export interface ProductDto {
  _id: string;
  refId?: string;
  title: string;
  description: string;
  link: string;
  locale: string;
}

interface ProductsReqParams {
  refId?: string;
  locale?: string;
}
interface ProductsService {
  getAll: (params?: ProductsReqParams) => Promise<ProductDto[]>;
  add: (product: Omit<ProductDto, "_id">) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

const productsService: ProductsService = {
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
