import React from "react";
import { toCategoryName } from "@utils/toCategoryName.ts";
import type { Category } from "../../types/category.ts";

import styles from "./styles.module.scss";

const GIFTS_URL = '/gifts';

interface Props {
  title: string;
  slug: string;
  category: Category;
  children: React.ReactNode;
}
const FeaturedGiftIdea = ({ title, category, slug, children }: Props) => {
  return (
    <a className={styles.giftItem} href={`/${GIFTS_URL}/${category}/${slug}`}>
      {children}

      <div className={styles.giftItem__info}>
        <h2 className={styles.giftItem__title}>{title}</h2>
      </div>
      <div className={styles.giftItem__category}>
        {toCategoryName(category)}
      </div>
    </a>
  );
};

export default FeaturedGiftIdea;
