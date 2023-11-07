import React, { useEffect, useState } from "react";
import type { IdeaDto } from "@services/ideasService.ts";
import IdeasService from "@services/ideasService.ts";
import Button from "@reactComponents/Button";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import Select from "../../components/Select";
import Card from "../../components/Card";
import AddLocale from "../AddLocaleFlow";

interface Props {
  availablePages: IdeaPage[];
}

const getCountry = (locale: string): string => locale.split("-")[1];

const RelatedProducts: React.FC<Props> = ({ availablePages }) => {
  const [refId, setRefId] = useState<string>(availablePages[0]._ref_id);

  const [ideas, setIdeas] = useState<IdeaDto[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!refId) return;
    const getIdeas = async () => {
      const items = await IdeasService.getAll({ _ref_id: refId });

      setIdeas(items);
    };
    getIdeas().catch((e) => {
      setError(true);
    });
  }, [refId]);

  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <h1>Related products</h1>

      <div style={{ maxWidth: "400px" }}>
        <Select
          name="_ref_id"
          label="Select page"
          onChange={setRefId}
          value={refId}
          options={availablePages.map((i) => ({
            value: i._ref_id,
            label: `${i.title} (${i._ref_id})`,
          }))}
        />
      </div>

      {ideas?.map((i) => (
        <Card header={getCountry(i.locale)}>
          {i.products.length ? (
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
                {i.products.map((product, index) => {
                  return (
                    <tr>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.link}</td>
                      <td>
                        <div style={{ display: "flex" }}>
                          <span style={{ marginRight: "10px" }}>
                            <Button color="secondary" children="Edit" />
                          </span>
                          <Button
                            color="secondary"
                            onClick={() => {
                              i.products.slice(index, 1);
                            }}
                            children="Delete"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div style={{ marginBottom: "2rem" }}>
              At the moment, there are no products available. You can add some
              by clicking the "Add" button below.
            </div>
          )}

          <Button children="Save" color="primary" />
        </Card>
      ))}
      <AddLocale
        pageRef={refId}
        onSuccess={() => {
          alert(
            "Related products by locale has been added, please reload page!",
          );
        }}
      />
    </div>
  );
};

export default RelatedProducts;
