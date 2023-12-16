import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { Button } from "@src/common";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

const ProductItem: React.FC<Props> = ({ imgSrc, title, description, link }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productItem__img}>
        <img className="img-cover" src={imgSrc} alt={title} />
      </div>

      <div>
        <h4 className={styles.productItem__title}>{title}</h4>
        <p className={styles.productItem__desc}>{description}</p>
        <Button
          className={styles.productItem__link}
          color="primary"
          size="sm"
          link={link}
          target="_blank"
        >
          View <FontAwesomeIcon icon={faExternalLink} />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
