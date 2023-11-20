import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Button, Dialog } from "src/common";
import ProductsService from "@services/productsService.ts";

interface Props {
  id: string;
  productName: string;
  onSuccess: () => void;
}

const RemoveProduct: React.FC<Props> = ({ id, productName, onSuccess }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { mutate: remove } = useMutation({
    mutationKey: ["removeItem", id],
    mutationFn: async () => {
      await ProductsService.delete(id);
    },
    onSuccess,
  });

  return (
    <div>
      <Dialog
        heading="Delete product"
        open={isOpened}
        onClickClose={() => {
          setIsOpened(false);
        }}
        footer={
          <>
            <Button
              color="transparent"
              onClick={() => {
                setIsOpened(false);
              }}
            >
              Cancel
            </Button>
            <Button color="danger" onClick={remove}>
              Ok
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete{" "}
          <strong>&quot;{productName}&quot;</strong> ?
        </p>
      </Dialog>

      <Button
        iconOnly
        color="transparent"
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

export default RemoveProduct;
