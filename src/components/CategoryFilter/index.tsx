import React from "react";
import { getCollection } from "astro:content";
import { categories } from "./categoryItems.ts";

import styles from "./styles.module.scss";

const gifts = await getCollection("gifts");

const generateLinks = () => {
  let links: [link: string, linkName: string][] = [];

  categories.forEach((item) => {
    const firstItem = gifts.find((i) => i.data.category?.includes(item[0]));

    if (!!firstItem) {
      const firstItemSlug = firstItem?.slug;
      const link = `/gifts/${item[0]}/${firstItemSlug}`;

      links.push([link, item[1]]);
    }
  });

  return links;
};

const categoryLinks = generateLinks();

const CategoryFilter: React.FC = () => {
  return (
    <div className={styles.categoryFilter}>
      <a
        className={styles.categoryFilter__link}
        href={`/gifts/${gifts[0].slug}`}
      >
        All
      </a>
      {categoryLinks.map((i) => (
        <a className={styles.categoryFilter__link} href={i[0]}>
          {i[1]}
        </a>
      ))}
    </div>
  );
};

export default CategoryFilter;
