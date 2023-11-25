import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";
interface Props {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "default" | "transparent" | "danger";
  iconOnly?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
const Button: React.FC<Props> = ({
  children,
  link,
  onClick,
  color = "default",
  iconOnly,
  disabled = false,
  style,
}) => {
  const className = classNames(styles.button, {
    [styles.button_disabled]: disabled,
    [styles.button_iconOnly]: iconOnly,
    [styles[`button_${color}`]]: color,
  });

  if (link)
    return (
      <a href={link} className={className} style={style}>
        {children}
      </a>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
