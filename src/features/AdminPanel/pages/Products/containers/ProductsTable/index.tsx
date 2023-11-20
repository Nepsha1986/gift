import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import { Pagination } from "src/common";

import RemoveProduct from "../RemoveProduct";
import AddProduct from "../AddProduct";
import EditProduct from "../EditProduct";

import Search from "@src/features/AdminPanel/components/Search";
import LocaleSelect from "@src/features/AdminPanel/components/LocaleSelect";
import { type SupportedLocales } from "@i18n/ui.ts";
const ProductsTable: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [locale, setLocale] = useState<SupportedLocales | "">("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      return await ProductsService.getAll({
        page,
        locale: locale || undefined,
        search: search || undefined,
      });
    },
  });

  useEffect(() => {
    void refetch();
  }, [page, search, locale]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ maxWidth: "450px", display: "flex", gap: "10px" }}>
        <Search
          value={search}
          onChange={(val) => {
            setPage(1);
            setSearch(val);
          }}
        />

        <LocaleSelect
          value={locale}
          onChange={(val) => {
            setPage(1);
            setLocale(val);
          }}
        />
      </div>

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
                    <td>
                      <strong>{product.title}</strong>
                    </td>
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
