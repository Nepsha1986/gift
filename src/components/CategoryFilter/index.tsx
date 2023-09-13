import React from "react";
import type { Category } from "../../types/category.ts";
import { getCollection } from "astro:content";

const gifts = await getCollection("gifts");

const fWoman = gifts.find((i) => i.data.category?.includes("for-women"));
const fMen = gifts.find((i) => i.data.category?.includes("for-men"));

const CategoryFilter: React.FC = () => {
  return (
    <div>
      <a href={`/gifts/${gifts[0].slug}`}>All</a>
      <a href={`/gifts/for-women/${fWoman?.slug}`}>For women</a>
      <a href={`/gifts/for-men/${fMen?.slug}`}>For men</a>
    </div>
  );
};

export default CategoryFilter;
