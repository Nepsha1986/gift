import React from "react";
import classNames from "classnames";
import { getCollection } from "astro:content";
import { categories } from "./categoryItems.ts";
import type { Category } from "../../types/category.ts";

import styles from "./styles.module.scss";

const gifts = await getCollection("gifts");

const generateLinks = () => {
  let links: [link: string, linkName: string, category: Category][] = [];

  categories.forEach((item) => {
    const firstItem = gifts.find((i) => i.data.category?.includes(item[0]));

    if (!!firstItem) {
      const firstItemSlug = firstItem?.slug;
      const link = `/gifts/${item[0]}/${firstItemSlug}`;
      const category = item[0];

      links.push([link, item[1], category]);
    }
  });

  return links;
};

const categoryLinks = generateLinks();

interface Props {
  activeCategory?: Category;
}
const CategoryFilter: React.FC<Props> = ({ activeCategory }) => {
  return (
    <div className={styles.categoryFilter}>
      {categoryLinks.map((i) => {
        const navItemClass = classNames(styles.categoryFilter__link, {
          [styles["categoryFilter__link_active"]]: activeCategory === i[2],
        });

        return (
          <a key={i[0]} className={navItemClass} href={i[0]}>
            {i[1]}
          </a>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
