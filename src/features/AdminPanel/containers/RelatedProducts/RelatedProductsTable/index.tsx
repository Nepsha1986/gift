import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";

import type { Product } from "@services/ideasService.ts";

import Input from "../../../components/Input";

import styles from "./styles.module.scss";

interface Props {
  relatedProducts: Product[];
  onChange: (products: Product[]) => void;
}

const useDidMountEffect = (func: () => void, deps: any[]): void => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
const RelatedProductsTable: React.FC<Props> = ({
  relatedProducts,
  onChange,
}) => {
  const [products, setProducts] = useState<Product[]>(relatedProducts);
  const [addOpen, setAddOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  useDidMountEffect(() => {
    onChange(products);
  }, [products]);

  const handleAddProduct = (): void => {
    setProducts((products) => [
      ...products,
      {
        title,
        description,
        link,
      },
    ]);
    setAddOpen(false);
    cleanForm();
  };

  const handleDeleteProduct = (name: string): void => {
    setProducts((products) => products.filter((i) => i.title !== name));
    onChange(products);
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
    <div className={styles.relatedProductsTable}>
      <div className={styles.relatedProductsTable__tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Link</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {!products?.length && (
              <tr>
                <td colSpan={4}>
                  <div>
                    At the moment, there are no products available. You can add
                    related product buy clicking add button below.
                  </div>
                </td>
              </tr>
            )}

            {products.map((product, index) => {
              return (
                <tr key={product.title}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.link}</td>
                  <td>
                    <Button
                      color="secondary"
                      iconOnly
                      onClick={() => {
                        handleDeleteProduct(product.title);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.relatedProductsTable__addBtnWrap}>
        <Button iconOnly color="primary" onClick={onClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>

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

          {addOpen && <Button onClick={handleAddProduct}>Add product</Button>}
        </form>
      </Dialog>
    </div>
  );
};

export default RelatedProductsTable;
