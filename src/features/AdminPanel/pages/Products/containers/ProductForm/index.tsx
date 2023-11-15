import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Input from "@src/features/AdminPanel/components/Input";
import { useAstroContext } from "@src/features/AdminPanel/context/astroContext.tsx";

import ProductsService from "@services/productsService.ts";

import Select from "@reactComponents/Select";
import Button from "@reactComponents/Button";

type FormFields = {
  title: string;
  description: string;
  link: string;
  locale: string;
  refId: string;
};
interface Props {
  id?: string;
  handleSubmit: (formData: FormFields) => void;
}
const ProductForm: React.FC<Props> = ({ id, handleSubmit }) => {
  const { ideaPages } = useAstroContext();

  const {
    data: defaults,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["getProduct", id],
    queryFn: () => {
      return ProductsService.get(id as string);
    },
    enabled: !!id,
    refetchOnMount: "always",
  });

  useEffect(() => {
    if (isSuccess) {
      setTitle(defaults?.title);
      setDescription(defaults?.description);
      setLink(defaults?.link);
      setLocale(defaults?.locale);
      setRefId(defaults?.refId || "");
    }
  }, [isSuccess]);

  const [title, setTitle] = useState<FormFields["title"]>("");
  const [description, setDescription] = useState<FormFields["description"]>("");
  const [link, setLink] = useState<FormFields["link"]>("");
  const [locale, setLocale] = useState<FormFields["locale"]>("en-US");
  const [refId, setRefId] = useState<FormFields["refId"]>(
    ideaPages?.length ? ideaPages[0].refId : "",
  );

  if (isLoading) return <div>Loading...</div>;

  return (
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
      />
      <Select
        name="refId"
        label="Select page"
        onChange={setRefId}
        value={refId}
        options={
          ideaPages?.map((i) => ({
            value: i.refId,
            label: `${i.title} (${i.refId})`,
          })) || []
        }
      />

      <Button
        color="primary"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          handleSubmit({
            title,
            description,
            link,
            locale,
            refId,
          });
        }}
      >
        {defaults ? "Edit product" : "Add product"}
      </Button>
    </form>
  );
};

export default ProductForm;
