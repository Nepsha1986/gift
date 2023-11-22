import React, { useState } from "react";
import type { Category } from "@src/types/category.ts";
import Switcher from "./Switcher.tsx";

import styles from "./styles.module.scss";

interface CategorySwitcherProps {
  activeCategory: Category;
  onClickCategory: (category: Category) => void;
}

const items: Array<{ category: Category; label: string }> = [
  {
    category: "for-women",
    label: "For women",
  },
  {
    category: "for-men",
    label: "For men",
  },
  {
    category: "for-teens",
    label: "For teems",
  },
  {
    category: "for-kids",
    label: "For kids",
  },
];
const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
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
