import React from "react";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import AddProduct from "./containers/AddProduct";
import ProductsTable from "@src/features/AdminPanel/pages/Products/containers/ProductsTable";

interface Props {
  availablePages: IdeaPage[];
}

const Products: React.FC<Props> = ({ availablePages }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductsTable />
      <AddProduct />
    </div>
  );
};

export default Products;
