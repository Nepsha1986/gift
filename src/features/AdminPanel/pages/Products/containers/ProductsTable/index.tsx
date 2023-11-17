import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import Pagination from "@reactComponents/Pagination";

import RemoveProduct from "../RemoveProduct";
import AddProduct from "../AddProduct";
import EditProduct from "../EditProduct";
const ProductsTable: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      return await ProductsService.getAll({ page });
    },
  });

  useEffect(() => {
    void refetch();
  }, [page]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!data?.items?.length && (
        <p>
          At the moment, there are no products available. You can add related
          product buy clicking add button below.
        </p>
      )}

      {!!data?.items?.length && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Ref ID</th>
                <th>Locale</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.items?.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {product.refId || "-"}
                    </td>
                    <td>{product.locale}</td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <RemoveProduct
                          id={product._id}
                          onSuccess={refetch}
                          productName={product.title}
                        />
                        <EditProduct id={product._id} onSuccess={refetch} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Pagination
            currentPage={data.page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        </div>
      )}

      <AddProduct onSuccess={refetch} />
    </div>
  );
};

export default ProductsTable;
