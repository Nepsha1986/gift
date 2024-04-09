import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  type AstroContextProps,
  AstroContext,
} from "./context/astroContext.tsx";

import { Dialog, Button } from "src/common";

import ProductList from "./containers/ProductList";
import { useTranslations } from "@i18n/utils.ts";
import all from "./i18n/translations.ts";

const queryClient = new QueryClient();

const RelatedProducts: React.FC<AstroContextProps> = ({
  refId,
  lang,
  locale,
}) => {
  const t = useTranslations(lang, all);
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AstroContext.Provider
        value={{
          lang,
          refId,
          locale,
        }}
      >
        <Dialog
          asDrawer
          heading={t("dialog.heading")}
          open={isDialogVisible}
          size="medium"
          onClickClose={() => {
            setDialogVisible(false);
          }}
          footer={
            <Button
              color="default"
              onClick={() => {
                setDialogVisible(false);
              }}
            >
              Close
            </Button>
          }
        >
          {isDialogVisible && <ProductList refId={refId} />}
        </Dialog>

        <p style={{ marginBottom: 0, fontFamily: "var(--font-secondary)" }}>
          {t("related_products_text")},{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setDialogVisible(true);
            }}
          >
            {t("related_products_action")}
          </a>
          .
        </p>
      </AstroContext.Provider>
    </QueryClientProvider>
  );
};

export default RelatedProducts;
