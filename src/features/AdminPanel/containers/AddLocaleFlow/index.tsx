import React, { useState } from "react";

import Button from "@reactComponents/Button";
import Dialog from "@reactComponents/Dialog";

import IdeasService from "@services/ideasService.ts";
import Select from "../../components/Select";

interface Props {
  pageRef: string;
  onSuccess: () => void;
}
const getLangFromPageRef = (ref: string): string => {
  return ref.split("_").slice(-1).toString();
};

const AddLocaleFlow: React.FC<Props> = ({ pageRef, onSuccess }) => {
  const [active, setActive] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState<string>();

  const [locale, setLocale] = useState<string>(
    `${getLangFromPageRef(pageRef)}-US`,
  );

  const handleSubmit = (): void => {
    IdeasService.add({
      locale,
      refId: pageRef,
      products: [],
    })
      .then(() => {
        setActive(false);
        onSuccess();
      })
      .catch((e) => {
        setFormSubmitError(e.response.data.error);
      });
  };

  return (
    <>
      {active && (
        <Dialog
          open={active}
          heading="Add related products by user location"
          onClickClose={() => {
            setFormSubmitError(undefined);
            setActive(false);
          }}
        >
          {formSubmitError ? (
            <div>{formSubmitError}</div>
          ) : (
            <div>
              <p>
                {`After submitting the form, a new block of related products for "${pageRef}" page will be added. Please note that currently you are adding a products block for "${getLangFromPageRef(
                  pageRef,
                )}" language`}
              </p>

              <form>
                <Select
                  name="country"
                  label="Choose country"
                  onChange={setLocale}
                  value={locale}
                  options={[
                    {
                      value: `${getLangFromPageRef(pageRef)}-US`,
                      label: "USA",
                    },
                    {
                      value: `${getLangFromPageRef(pageRef)}-UA`,
                      label: "Ukraine",
                    },
                  ]}
                ></Select>

                <Button onClick={handleSubmit} color="primary">
                  Submit
                </Button>
              </form>
            </div>
          )}
        </Dialog>
      )}

      <Button
        color="primary"
        onClick={() => {
          setActive(true);
        }}
      >
        Add Locale
      </Button>
    </>
  );
};

export default AddLocaleFlow;
