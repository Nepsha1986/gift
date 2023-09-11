import * as React from "react";
import styles from "./styles.module.scss";
interface Props {
  title: string;
  description: string;
  thumbnail: string;
}
const GiftCard: React.FC<Props> = ({ title = "", thumbnail, description }) => (
  <div className={styles.giftCard}>
    <div>{title}</div>
    <img src={thumbnail} alt={title} />
    <div>{description}</div>
  </div>
);

export default GiftCard;
