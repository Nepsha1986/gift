import React, { useEffect, useState } from "react";
import type { IdeaDto } from "@services/ideasService.ts";
import IdeasService from "@services/ideasService.ts";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import Select from "@reactComponents/Select";
import AddLocale from "../../containers/AddLocaleFlow";
import RelatedProductsCard from "./RelatedProductsCard";

interface Props {
  availablePages: IdeaPage[];
}

const RelatedProducts: React.FC<Props> = ({ availablePages }) => {
  const [refId, setRefId] = useState<string>(availablePages[0].refId);

  const [ideas, setIdeas] = useState<IdeaDto[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getIdeas = async (): Promise<void> => {
    setLoading(true);

    try {
      const items = await IdeasService.getAll({ refId });

      setIdeas(items);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!refId) return;
    void getIdeas();
  }, [refId]);

  return (
    <div>
      <h1>Related products</h1>

      <div style={{ maxWidth: "400px" }}>
        <Select
          name="refId"
          label="Select page"
          onChange={setRefId}
          value={refId}
          options={availablePages.map((i) => ({
            value: i.refId,
            label: `${i.title} (${i.refId})`,
          }))}
        />
      </div>

      {error && <div>Something went wrong</div>}

      {loading && <div>Loading...</div>}

      {!loading &&
        !error &&
        ideas?.map((i) => (
          <RelatedProductsCard
            key={i._id}
            _id={i._id}
            refId={i.refId}
            products={i.products}
            locale={i.locale}
          />
        ))}

      <AddLocale pageRef={refId} onSuccess={getIdeas} />
    </div>
  );
};

export default RelatedProducts;
