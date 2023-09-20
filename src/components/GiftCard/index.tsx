import * as React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
interface Props {
  index: number;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  active: boolean;
}
const GiftCard: React.FC<Props> = ({
  index,
  title,
  thumbnail,
  description,
  link,
  active,
}) => {
  const className = classNames(styles.giftCard, {
    [styles["giftCard_active"]]: active,
  });

  return (
    <a href={link} className={className}>
      <div className={styles.giftCard__imgWrap}>
        <img className={styles.giftCard__img} src={thumbnail} alt={title} />
      </div>

      <div>
        <h1 className={styles.giftCard__heading}>
          {index}. {title}
        </h1>
        <p className={styles.giftCard__desc}>{description}</p>
      </div>
    </a>
  );
};

export default GiftCard;
