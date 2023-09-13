import React from "react";
import { getCollection } from "astro:content";
import GiftCard from "@components/GiftCard";
import CategoryFilter from "@components/CategoryFilter";
import type { Category } from "../../types/category.ts";

const gifts = await getCollection("gifts");

interface Props {
  category?: Category;
}

const GiftList: React.FC<Props> = ({ category }) => {
  const filtered = category
    ? gifts.filter((i) => i.data.category === category)
    : gifts;
  const getLink = (slug: string, category?: Category): string =>
    category ? `/gifts/${category}/${slug}` : `/gifts/${slug}`;

  return (
    <div>
      <CategoryFilter />

      {!!filtered.length &&
        filtered.map((i) => (
          <GiftCard
            title={i.data.title}
            thumbnail={i.data.thumbnail}
            description={i.data.description}
            link={getLink(i.slug, i.data?.category as Category)}
          />
        ))}
    </div>
  );
};

export default GiftList;
