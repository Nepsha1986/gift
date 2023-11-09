import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dialog from "@reactComponents/Dialog";
import Button from "@reactComponents/Button";

import ProductTable from "./containers/ProductTable";

const queryClient = new QueryClient();

interface Props {
  refId: string;
}

const ViewStoresFlow: React.FC<Props> = ({ refId }) => {
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
        View stores
      </Button>
    </QueryClientProvider>
  );
};

export default ViewStoresFlow;
