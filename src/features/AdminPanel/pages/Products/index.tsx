import React from "react";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import ProductsTable from "./containers/ProductsTable";

interface Props {
  availablePages: IdeaPage[];
}

const Products: React.FC<Props> = ({ availablePages }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductsTable />
    </div>
  );
};

export default Products;
