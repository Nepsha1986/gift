import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@src/services/productsService.ts";
import { Pagination } from "@src/common";
import ProductItem from "@src/components/react/ProductItem";
import { useTranslations } from "@src/i18n/utils.ts";
import type { SupportedLanguages } from "@src/i18n/ui.ts";
import i18n from "./i18n.ts";

import { useAstroContext } from "../../context/astroContext.tsx";

import styles from "./styles.module.scss";

interface Props {
  refId: string;
}

const ProductList: React.FC<Props> = ({ refId }) => {
  const { lang, locale } = useAstroContext();
  const [page, setPage] = useState<number>(1);
  const t = useTranslations(lang as SupportedLanguages, i18n);

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["getRelatedProducts", refId, locale],
    queryFn: async () =>
      await ProductsService.getAll({
        refId,
        locale,
        page,
      }),
  });

  useEffect(() => {
    void refetch();
  }, [page]);

  if (isError) return <div>Error! Please try again later.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data?.items?.length) return <p>{t("m.no_related_products")}</p>;

  return (
    <div>
      <ul className={styles.productList}>
        {data.items?.map((item, index) => (
          <li key={item._id} className={styles.productList__item}>
            <ProductItem
              link={item.link}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          </li>
        ))}
      </ul>

      <Pagination
        onPageChange={(page) => {
          setPage(page);
        }}
        totalPages={data.totalPages}
        currentPage={data.page}
      />
    </div>
  );
};

export default ProductList;
