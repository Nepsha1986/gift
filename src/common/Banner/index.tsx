import React from "react";
import styles from "./styles.module.scss";

interface Props {
  image: React.ReactNode;
  text: string;
}
const Banner: React.FC<Props> = ({ image, text }) => {
  return (
    <div className={styles.banner}>
      <p className={styles.banner__text}>{text}</p>
      <div className={styles.banner__image}>{image}</div>
    </div>
  );
};

export default Banner;
