import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";
import ProductForm from "../ProductForm";
import ProductsService, { type ProductDto } from "@services/productsService.ts";

interface Props {
  id: string;
  onSuccess: () => void;
}

const EditProduct: React.FC<Props> = ({ id, onSuccess }) => {
  const [isOpened, setIsOpened] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["updateProduct", id],
    mutationFn: (data: Omit<ProductDto, "_id">) => {
      return ProductsService.update(id, data);
    },
    onSuccess: () => {
      setIsOpened(false);
      onSuccess();
    },
  });

  return (
    <div>
      {isOpened && (
        <Dialog
          heading="Edit product"
          open={isOpened}
          onClickClose={() => {
            setIsOpened(false);
          }}
        >
          <ProductForm id={id} handleSubmit={mutate} />
        </Dialog>
      )}

      <Button
        iconOnly
        color="transparent"
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <FontAwesomeIcon icon={faEdit} />
      </Button>
    </div>
  );
};

export default EditProduct;
