import React from "react";
import classNames from "classnames";

import { type Category } from "@src/types/category.ts";
import styles from "./styles.module.scss";

const Switcher: React.FC<{
  category: Category;
  label: string;
  active: boolean;
  onClick: (category: Category) => void;
}> = ({ category, label, active, onClick }) => {
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
