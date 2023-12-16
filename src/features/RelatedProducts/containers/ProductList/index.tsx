import React from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";

import i18n from "./i18n.ts";

import { useAstroContext } from "../../context/astroContext.tsx";

import styles from "./styles.module.scss";

interface Props {
  refId: string;
}

const ProductList: React.FC<Props> = ({ refId }) => {
  const { lang, locale } = useAstroContext();
  const t = useTranslations(lang as SupportedLanguages, i18n);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["getRelatedProducts", refId, locale],
    queryFn: async () =>
      await ProductsService.getAll({
        refId,
        locale,
      }),
  });

  if (isError) return <div>Error! Please try again later.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data?.items?.length) return <p>{t("m.no_related_products")}</p>;

  return (
    <ul className={styles.productList}>
      {data.items?.map((item, index) => (
        <li key={item._id} className={styles.productList__item}>
          <img width="200px" src={item.imgSrc} alt={item.title} />
          <p style={{ marginBottom: 0 }}>
            <span>{index + 1}.</span> <a href={item.link}>{item.title}</a> (
            {<span>{item.description}</span>}).
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
