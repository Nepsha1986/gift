import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";
interface Props {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
}
const Button: React.FC<Props> = ({ text, onClick, color }) => {
  const className = classNames(styles.button, {
    [styles[`button_${color}`]]: color !== undefined,
  });
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
