import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type TextColor = "inherit" | "default" | "danger" | "success";

interface Props {
  children: React.ReactNode | string;
  color?: TextColor;
}
const Text: React.FC<Props> = ({ children, color = "inherit" }) => {
  const className = classNames(styles.text, {
    [styles[`text_${color}`]]: color !== "inherit" ? color : false,
  });

  return <p className={className}>{children}</p>;
};

export default Text;
