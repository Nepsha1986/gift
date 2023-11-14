import React from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import RemoveProduct from "../RemoveProduct";
import AddProduct from "@src/features/AdminPanel/pages/Products/containers/AddProduct";
const ProductsTable: React.FC = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      return await ProductsService.getAll();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!products?.length && (
        <p>
          At the moment, there are no products available. You can add related
          product buy clicking add button below.
        </p>
      )}

      {!!products?.length && (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Link</th>
              <th>Locale</th>
              <th>Ref ID</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product, index) => {
              return (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.link}</td>
                  <td>{product.locale}</td>
                  <td>{product.refId || "-"}</td>
                  <td>
                    <RemoveProduct id={product._id} onSuccess={refetch} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <AddProduct onSuccess={refetch} />
    </div>
  );
};

export default ProductsTable;
