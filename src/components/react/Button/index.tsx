import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "default";
  iconOnly?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  color = "default",
  iconOnly,
}) => {
  const className = classNames(styles.button, {
    [styles.button_iconOnly]: iconOnly,
    [styles[`button_${color}`]]: color,
  });
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
