import React, { useState } from "react";

import Dialog from "@reactComponents/Dialog";
import ProductTable from "@reactComponents/ProductTable";
import Button from "@reactComponents/Button";

interface Props {
  refId: string;
}

const ViewStoresFlow: React.FC<Props> = ({ refId }) => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <div>
      {isDialogVisible && (
        <Dialog
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
        children="View stores"
      />
    </div>
  );
};

export default ViewStoresFlow;
