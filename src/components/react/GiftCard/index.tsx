import * as React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  link: string;
  active?: boolean;
}
const GiftCard: React.FC<Props> = ({
  title,
  children,
  description,
  link,
  active,
}) => {
  const className = classNames(styles.giftCard, {
    [styles.giftCard_active]: active,
  });

  return (
    <a data-testid="gift_card" href={link} className={className}>
      <div className={styles.giftCard__imgWrap}>{children}</div>

      <div>
        <h2 className={styles.giftCard__heading}>{title}</h2>
        <p className={styles.giftCard__desc}>{description}</p>
      </div>
    </a>
  );
};

export default GiftCard;
