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
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}
const Button: React.FC<Props> = ({
  children,
  link,
  onClick,
  color = "default",
  iconOnly,
  disabled = false,
  style,
  size = "lg",
  className = "",
  target,
}) => {
  const cssClassName = classNames(styles.button, className, {
    [styles.button_disabled]: disabled,
    [styles.button_iconOnly]: iconOnly,
    [styles[`button_${color}`]]: color,
    [styles[`button_${size}`]]: color,
  });

  if (link)
    return (
      <a href={link} className={cssClassName} style={style} target={target}>
        {children}
      </a>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className={cssClassName}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
