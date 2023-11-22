import React from "react";
import classNames from "classnames";

import { type Category } from "@src/types/category.ts";
import styles from "./styles.module.scss";

const Switcher = ({
  category,
  label,
  active,
  onClick,
}: {
  category: Category;
  label: String;
  active: boolean;
  onClick: (category: Category) => void;
}) => {
  const className = classNames(styles.switcher, {
    [styles.switcher_active]: active,
  });

  return (
    <div
      className={className}
      onClick={() => {
        onClick(category);
      }}
    >
      {label}
    </div>
  );
};

export default Switcher;
