import React, { useState } from "react";
import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";
import Input from "../../components/Input";
import IdeasService from "@services/ideasService.ts";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import Select from "../../components/Select";

interface Props {
  availablePages: IdeaPage[];
}

const AddIdeaFlow: React.FC<Props> = ({ availablePages }) => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState<string>("");
  const [refId, setRefId] = useState<string>("");

  const handleSubmit = async () => {
    try {
      return IdeasService.add({
        name: name,
        locale: "en-USA",
        _ref_id: refId,
        products: [],
      });
    } catch (e) {
      setError(true);
    }
  };

  if (error) return <div>Something went wrong, please try again later.</div>;

  return (
    <>
      <Dialog
        open={active}
        onClickClose={() => {
          setActive(false);
        }}
      >
        {name}
        {refId}

        <form>
          <Select
            name="_ref_id"
            label="Choose Idea page"
            onChange={setRefId}
            value={refId}
            options={availablePages.map((i) => ({
              value: i._ref_id,
              label: `${i.title} (${i._ref_id})`,
            }))}
          ></Select>

          <Input name="name" label="Name" value={name} onChange={setName} />

          <Button text="submit" onClick={handleSubmit} />
        </form>
      </Dialog>

      <Button
        color="primary"
        text="Add"
        onClick={() => {
          setActive(true);
        }}
      />
    </>
  );
};

export default AddIdeaFlow;
