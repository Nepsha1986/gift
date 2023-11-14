import Input from "@src/features/AdminPanel/components/Input";
import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import ProductsService from "@services/productsService.ts";
import Select from "@reactComponents/Select";

const AddProduct = () => {
  const { mutate } = useMutation({
    mutationFn: ProductsService.add,
    onSuccess: () => {
      setAddOpen(false);
      cleanForm();
    },
  });
  const [addOpen, setAddOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [locale, setLocale] = useState("en-US");
  const [refId, setRefId] = useState("");
  const handleAddProduct = (): void => {
    mutate({
      title,
      description,
      link,
      locale,
      refId,
    });
  };

  const onClickAdd = (): void => {
    setAddOpen(true);
  };

  const cleanForm = (): void => {
    setTitle("");
    setDescription("");
    setLink("");
  };

  return (
    <div>
      <Dialog
        heading="Add product"
        open={addOpen}
        onClickClose={() => {
          setAddOpen(false);
          cleanForm();
        }}
      >
        <form>
          <Input name="title" label="Title" value={title} onChange={setTitle} />
          <Input
            name="description"
            label="Description"
            value={description}
            onChange={setDescription}
          />
          <Input name="link" label="Link" value={link} onChange={setLink} />
          <Select
            name="country"
            label="Choose country"
            onChange={setLocale}
            value={locale}
            options={[
              {
                value: `en-US`,
                label: "USA (english)",
              },
              {
                value: `uk-UA`,
                label: "Ukraine (українська)",
              },
              {
                value: `ru-UA`,
                label: "Ukraine (русский)",
              },
            ]}
          ></Select>

          <Button onClick={handleAddProduct}>Add product</Button>
        </form>
      </Dialog>

      <Button color="primary" onClick={onClickAdd}>
        <FontAwesomeIcon icon={faPlus} />
        <span style={{ marginLeft: "10px" }}>Add Product</span>
      </Button>
    </div>
  );
};

export default AddProduct;
