import React, { useState } from "react";

import Dialog from "@reactComponents/Dialog";
import ProductTable from "@reactComponents/ProductTable";
import Button from "@reactComponents/Button";

interface Props {
  ideaName: string;
}

const ViewStoresFlow: React.FC<Props> = ({ ideaName }) => {
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
          <ProductTable ideaName={ideaName} />
        </Dialog>
      )}

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
