import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
const ProductsTable: React.FC = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      return await ProductsService.getAll();
    },
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Link</th>
          <th>Locale</th>
          <th>Ref ID</th>
        </tr>
      </thead>

      <tbody>
        {!products?.length && (
          <tr>
            <td colSpan={3}>
              <div>
                At the moment, there are no products available. You can add
                related product buy clicking add button below.
              </div>
            </td>
          </tr>
        )}

        {products?.map((product, index) => {
          return (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.link}</td>
              <td>{product.locale}</td>
              <td>{product.refId || "-"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
