import React, { useMemo, useState } from "react";
import ideasService from "@services/ideasService.ts";
import { useQuery } from "@tanstack/react-query";
import Select from "@reactComponents/Select";
import {
  getLocale,
  locales,
  type SupportedCountries,
} from "../../../../types/Locale.ts";
import { useTranslations } from "@i18n/utils.ts";
import { useAstroContext } from "../../context/astroContext.tsx";
import type { SupportedLanguages } from "@i18n/ui.ts";
import i18n from "./i18n.ts";

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
            <div>
              <p>
                {
                  "Within the list, you'll find a handpicked assortment of gift ideas, each complete with a name, description, and product links. This provides you with a convenient way to browse and discover the ideal gift for any occasion. Enjoy your gift-hunting experience!"
                }
              </p>

              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {idea?.products?.map((item, index) => (
                    <tr key={item.title}>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.link}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>
              We are sorry, but currently there are no products in the list. We
              are working on adding this feature, and it will be available soon.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductTable;
