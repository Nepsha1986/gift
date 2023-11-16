import React from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";

import i18n from "./i18n.ts";

import { useAstroContext } from "../../context/astroContext.tsx";

interface Props {
  refId: string;
}

const ProductTable: React.FC<Props> = ({ refId }) => {
  const { lang, locale } = useAstroContext();
  const t = useTranslations(lang as SupportedLanguages, i18n);

  const { data, isError, isLoading, isFetched } = useQuery({
    queryKey: ["getRelatedProducts", refId, locale],
    queryFn: async () =>
      await ProductsService.getAll({
        refId,
        locale,
      }),
  });

  if (isError) return <div>Error! Please try again later.</div>;
  if (isLoading) return <div>Loading...</div>;
  if(!data?.items?.length) return <p>{t("m.no_related_products")}</p>;

  return (
    <ul style={{listStyle: "none", padding: 0, fontSize: '0.85rem'}}>
      {data.items?.map((item, index) => (
        <li style={{marginBottom: '3px'}}>
          {index + 1}. <a href={item.link}>{item.title}</a> ({item.description}).
        </li>
      ))}
    </ul>
  );
};

export default ProductTable;
