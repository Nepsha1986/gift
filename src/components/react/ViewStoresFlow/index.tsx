import React, { useState } from "react";
import Map from "@reactComponents/Map";
import Dialog from "@reactComponents/Dialog";

const ViewStoresFlow = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <div>
      <Dialog
        open={isDialogVisible}
        onClickClose={() => {
          setDialogVisible(false);
        }}
      >
        <Map />
      </Dialog>

      <button
        onClick={() => {
          setDialogVisible(true);
        }}
      >
        View stores
      </button>
    </div>
  );
};

export default ViewStoresFlow;
