import RelatedProductsTable from "../RelatedProductsTable";
import Button from "@reactComponents/Button";
import Card from "../../../components/Card";
import React, { useState } from "react";
import type { Product } from "@services/ideasService.ts";
import IdeasService from "@services/ideasService.ts";

interface Props {
  _id: string;
  refId: string;
  locale: string;
  products: Product[];
}

const getCountry = (locale: string): string => locale.split("-")[1];
const RelatedProductsCard: React.FC<Props> = ({
  _id,
  refId,
  locale,
  products,
}) => {
  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  const onSave = async (): Promise<void> => {
    try {
      await IdeasService.update(_id, {
        locale,
        refId: refId,
        products: updatedProducts,
      });

      setUpdatedProducts([]);
      alert("Related products has been updated!");
    } catch {
      setError(true);
    }
  };

  return (
    <Card header={getCountry(locale)}>
      <RelatedProductsTable
        relatedProducts={products}
        onChange={(products) => {
          setUpdatedProducts(products);
        }}
      />

      {error && <div>Update failed, pleas try again later!</div>}

      {!!updatedProducts?.length && (
        <div style={{ marginBottom: "1rem" }}>
          {'Please click "Save" button below to apply your changes'}
        </div>
      )}

      <Button
        disabled={!updatedProducts?.length}
        color="primary"
        onClick={onSave}
      >
        Save
      </Button>
    </Card>
  );
};

export default RelatedProductsCard;
