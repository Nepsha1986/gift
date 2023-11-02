import { giftsAPI } from "./api.ts";

export interface ProductDTO {
  id: string;
  title: string;
  description: string;
  link: string;
}
interface ProductsService {
  getAll: () => Promise<ProductDTO[]>;
}

const productsService: ProductsService = {
  getAll: async function () {
    const { data } = await giftsAPI.get("/products");
    return data;
  },
};

export default productsService;
