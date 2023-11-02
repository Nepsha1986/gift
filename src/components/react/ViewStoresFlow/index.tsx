import React, { useState } from "react";

import Dialog from "@reactComponents/Dialog";
import ProductTable from "@reactComponents/ProductTable";
import Button from "@reactComponents/Button";

const ViewStoresFlow: React.FC = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <div>
      <Dialog
        open={isDialogVisible}
        onClickClose={() => {
          setDialogVisible(false);
        }}
      >
        <ProductTable />
      </Dialog>

      <Button
        onClick={() => {
          setDialogVisible(true);
        }}
        color="primary"
        text="View stores"
      />
    </div>
  );
};

export default ViewStoresFlow;
