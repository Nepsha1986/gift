import React, { useEffect, useState } from "react";
import type { IdeaDto } from "@services/ideasService.ts";
import IdeasService from "@services/ideasService.ts";
import type { IdeaPage } from "../../types/IdeaPage.ts";
import Select from "../../components/Select";
import AddLocale from "../AddLocaleFlow";
import RelatedProductsCard from "./RelatedProductsCard";

interface Props {
  availablePages: IdeaPage[];
}

const RelatedProducts: React.FC<Props> = ({ availablePages }) => {
  const [refId, setRefId] = useState<string>(availablePages[0]._ref_id);

  const [ideas, setIdeas] = useState<IdeaDto[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getIdeas = async (): Promise<void> => {
    setLoading(true);

    try {
      const items = await IdeasService.getAll({ _ref_id: refId });

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

      {error && <div>Something went wrong</div>}

      {loading && <div>Loading...</div>}

      {!loading &&
        !error &&
        ideas?.map((i) => (
          <RelatedProductsCard
            key={i._id}
            refId={i.refId}
            _id={i._id}
            products={i.products}
            locale={i.locale}
          />
        ))}

      <AddLocale pageRef={refId} onSuccess={getIdeas} />
    </div>
  );
};

export default RelatedProducts;
