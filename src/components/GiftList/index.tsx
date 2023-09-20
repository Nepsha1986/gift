import React from "react";
import { getCollection } from "astro:content";
import GiftCard from "@components/GiftCard";
import CategoryFilter from "@components/CategoryFilter";
import type { Category } from "../../types/category.ts";

const gifts = await getCollection("gifts");

interface Props {
  category?: Category;
  activeGiftSlug?: string;
}

const GiftList: React.FC<Props> = ({ category, activeGiftSlug }) => {
  const filtered = !!category
    ? gifts.filter((i) => i.data?.category === category)
    : gifts;
  const getLink = (slug: string, category?: Category): string =>
    category ? `/gifts/${category}/${slug}` : `/gifts/${slug}`;

  return (
    <div>
      <CategoryFilter activeCategory={category} />

      {!!filtered.length &&
        filtered.map((i, index) => (
          <GiftCard
            index={index + 1}
            key={i.slug}
            title={i.data.title}
            thumbnail={i.data.thumbnail}
            description={i.data.description}
            link={getLink(i.slug, category)}
            active={i.slug === activeGiftSlug}
          />
        ))}
    </div>
  );
};

export default GiftList;
