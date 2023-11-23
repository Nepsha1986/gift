import React, { useState } from "react";
import type { Category } from "@src/types/category.ts";
import Switcher from "./Switcher.tsx";

import styles from "./styles.module.scss";

interface CategorySwitcherProps {
  items: Array<{ category: Category; label: string }>;
  activeCategory: Category;
  onClickCategory: (category: Category) => void;
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
  items,
  activeCategory,
  onClickCategory,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.categorySwitcher}>
      {items.map((i, index) => (
        <Switcher
          key={i.category}
          category={i.category}
          onClick={(category) => {
            setActiveIndex(index);
            onClickCategory(category);
          }}
          label={i.label}
          active={activeCategory === i.category}
        />
      ))}

      <div
        className={styles.categorySwitcher__activeIndicator}
        style={{ width: "calc(100%/4)", left: 25 * activeIndex + "%" }}
      />
    </div>
  );
};

export default CategorySwitcher;
