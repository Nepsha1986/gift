import React from "react";
import styles from "./styles.module.scss";
interface Props {
  header?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
}
const Card: React.FC<Props> = ({ header, footer, children }) => {
  return (
    <div className={styles.card}>
      <header className={styles.card__header}>{header}</header>
      <div className={styles.card__main}>{children}</div>
      {footer && <footer className={styles.card__footer}>{footer}</footer>}
    </div>
  );
};

export default Card;
