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
        {isDialogVisible && (
          <Dialog
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
            <ProductList refId={refId} />
          </Dialog>
        )}

        <Button
          onClick={() => {
            setDialogVisible(true);
          }}
          color="primary"
        >
          {t("btn.related_products")}
        </Button>
      </AstroContext.Provider>
    </QueryClientProvider>
  );
};

export default RelatedProducts;
