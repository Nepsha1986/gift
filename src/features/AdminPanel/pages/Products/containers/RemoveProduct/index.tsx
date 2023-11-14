import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";
import { useMutation } from "@tanstack/react-query";
import ProductsService from "@services/productsService.ts";

interface Props {
  id: string;
}

const RemoveProduct: React.FC<Props> = ({ id }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { mutate: remove } = useMutation({
    mutationKey: ["removeItem", id],
    mutationFn: () => {
      return ProductsService.delete(id);
    },
  });

  return (
    <div>
      <Dialog
        heading="Remove product"
        open={isOpened}
        onClickClose={() => {
          setIsOpened(false);
        }}
      >
        Remove Item?
        <Button onClick={remove}>Remove</Button>
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
