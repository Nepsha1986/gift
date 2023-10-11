import React from "react";
import { toCategoryName } from "@utils/toCategoryName.ts";
import type { Category } from "../../../types/category.ts";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  link: string;
  category: Category;
  children: React.ReactNode;
}
const FeaturedGiftIdea = ({ title, category, link, children }: Props) => {
  return (
    <a className={styles.giftItem} href={link}>
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
