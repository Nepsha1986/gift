import * as React from "react";
import classNames from "classnames";
import type { Category } from "@src/types/category.ts";

import styles from "./styles.module.scss";
interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  link: string;
  active?: boolean;
  category?: Category;
  // "row" — compact list item (sidebar), "tile" — large card (homepage grid)
  variant?: "row" | "tile";
  label?: string;
}
const GiftCard: React.FC<Props> = ({
  title,
  children,
  description,
  link,
  active,
  category,
  variant = "row",
  label,
}) => {
  const className = classNames(styles.giftCard, styles[`giftCard_${variant}`], {
    [styles.giftCard_active]: active,
  });

  return (
    <a
      data-testid="gift_card"
      data-category={category}
      href={link}
      className={className}
      aria-current={active ? "page" : undefined}
    >
      <div className={styles.giftCard__imgWrap}>
        {children}
        {label && <span className={styles.giftCard__label}>{label}</span>}
      </div>

      <div className={styles.giftCard__body}>
        <h3 className={styles.giftCard__heading}>{title}</h3>
        <p className={styles.giftCard__desc}>{description}</p>
      </div>
    </a>
  );
};

export default GiftCard;
