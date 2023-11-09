import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dialog from "@reactComponents/Dialog";
import Button from "@reactComponents/Button";

import ProductTable from "./containers/ProductTable";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";
import all from "./i18n/translations.ts";

const queryClient = new QueryClient();

interface Props {
  lang: SupportedLanguages;
  refId: string;
}

const ViewStoresFlow: React.FC<Props> = ({ refId, lang }) => {
  const t = useTranslations(lang, all);
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {isDialogVisible && (
        <Dialog
          heading="Happy gift-hunting!"
          open={isDialogVisible}
          onClickClose={() => {
            setDialogVisible(false);
          }}
        >
          <ProductTable refId={refId} />
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
    </QueryClientProvider>
  );
};

export default ViewStoresFlow;
