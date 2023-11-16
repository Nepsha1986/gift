import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductsService from "@services/productsService.ts";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";

import i18n from "./i18n.ts";

import { useAstroContext } from "../../context/astroContext.tsx";
import RelatedProduct from "@src/features/ViewStoresFlow/components/RelatedProduct";

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

  return (
    <div>
      {data?.items?.length ? (
        <>
          {data.items?.map((item, index) => (
            <RelatedProduct
              key={item.title}
              link={item.link}
              title={item.title}
              description={item.description}
            />
          ))}
        </>
      ) : (
        <p>{t("m.no_related_products")}</p>
      )}
    </div>
  );
};

export default ProductTable;
