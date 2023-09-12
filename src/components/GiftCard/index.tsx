import * as React from "react";
import styles from "./styles.module.scss";
interface Props {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
}
const GiftCard: React.FC<Props> = ({ title, thumbnail, description, slug }) => (
  <a href={`/gifts/${slug}`} className={styles.giftCard}>
    <div className={styles.giftCard__imgWrap}>
      <img className={styles.giftCard__img} src={thumbnail} alt={title} />
    </div>

    <div>
      <h1 className={styles.giftCard__heading}>{title}</h1>
      <p className={styles.giftCard__desc}>{description}</p>
    </div>
  </a>
);

export default GiftCard;
