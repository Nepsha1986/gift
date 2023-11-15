import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";

import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";
import ProductsService from "@services/productsService.ts";
import ProductForm from "../ProductForm";

interface Props {
  onSuccess: () => void;
}
const AddProduct: React.FC<Props> = ({ onSuccess }) => {
  const { mutate } = useMutation({
    mutationFn: ProductsService.add,
    onSuccess: () => {
      setAddOpen(false);
      onSuccess();
    },
  });
  const [addOpen, setAddOpen] = useState(false);
  // TODO: review
  const handleAddProduct = (data: any): void => {
    mutate({ ...data });
  };

  const onClickAdd = (): void => {
    setAddOpen(true);
  };

  return (
    <div>
      {addOpen && (
        <Dialog
          heading="Add product"
          open={addOpen}
          onClickClose={() => {
            setAddOpen(false);
          }}
        >
          <ProductForm
            handleSubmit={(formData) => {
              handleAddProduct(formData);
            }}
          />
        </Dialog>
      )}

      <Button color="primary" onClick={onClickAdd}>
        <FontAwesomeIcon icon={faPlus} />
        <span style={{ marginLeft: "10px" }}>Add Product</span>
      </Button>
    </div>
  );
};

export default AddProduct;
