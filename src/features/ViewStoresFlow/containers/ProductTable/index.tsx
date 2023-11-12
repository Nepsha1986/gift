import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ideasService from "@services/ideasService.ts";
import Select from "@reactComponents/Select";
import {
  getLocale,
  locales,
  type SupportedCountries,
} from "@src/types/Locale.ts";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";

import i18n from "./i18n.ts";

import { useAstroContext } from "../../context/astroContext.tsx";
import RelatedProduct from "@src/features/ViewStoresFlow/components/RelatedProduct";

interface Props {
  refId: string;
}

const ProductTable: React.FC<Props> = ({ refId }) => {
  const { lang } = useAstroContext();
  const t = useTranslations(lang as SupportedLanguages, i18n);
  const [countryCode, setCountryCode] = useState<SupportedCountries | "">("");
  const [language, setLanguage] = useState<SupportedLanguages>();

  const languageOptions = useMemo(() => {
    if (countryCode) {
      return [
        {
          value: "",
          label: t("label.choose_language"),
          disabled: true,
        },
        ...locales[countryCode].map((code) => ({
          value: code,
          label: code,
        })),
      ];
    }

    return [];
  }, [countryCode]);

  const {
    data: idea,
    isError,
    isLoading,
    isFetched,
  } = useQuery({
    enabled: !!countryCode && !!language,
    queryKey: ["getRelatedProducts", refId, language, countryCode],
    queryFn: async () =>
      await ideasService.getRelatedProducts(
        getLocale(
          language as SupportedLanguages,
          countryCode as SupportedCountries,
        ),
        refId,
      ),
  });

  if (isError) return <div>Error! Please try again later.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!isFetched && (
        <div>
          <Select
            name="country"
            label={t("label.country")}
            value={countryCode || ""}
            options={[
              {
                value: "",
                label: t("label.choose_location"),
                disabled: true,
              },
              {
                value: "US",
                label: "USA",
              },
              {
                value: "UA",
                label: "Ukraine",
              },
            ]}
            onChange={(val) => {
              setCountryCode(val as SupportedCountries);
            }}
          />

          {countryCode && (
            <Select
              name="language"
              label={t("label.language")}
              value={language ?? ""}
              options={languageOptions}
              onChange={(val) => {
                setLanguage(val as SupportedLanguages);
              }}
            />
          )}
        </div>
      )}

      {isFetched && (
        <div>
          {idea?.products?.length ? (
            <>
              {idea?.products?.map((item, index) => (
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
      )}
    </div>
  );
};

export default ProductTable;
