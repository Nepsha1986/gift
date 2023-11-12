import React from "react";
import styles from "./styles.module.scss";

interface RelatedProductProps {
  title: string;
  description: string;
  link: string;
}
const RelatedProduct: React.FC<RelatedProductProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <a
      className={styles.relatedProduct}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h2 className={styles.relatedProduct__title}>{title}</h2>
      <div className={styles.relatedProduct__description}>{description}</div>
    </a>
  );
};

export default RelatedProduct;
