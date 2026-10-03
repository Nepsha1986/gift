import React from "react";
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
  const activeIndex = Math.max(
    items.findIndex((i) => i.category === activeCategory),
    0,
  );

  return (
    <div className={styles.categorySwitcher} role="tablist">
      <div
        className={styles.categorySwitcher__activeIndicator}
        style={{
          width: `calc((100% - 8px) / ${items.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {items.map((i) => (
        <Switcher
          key={i.category}
          category={i.category}
          onClick={onClickCategory}
          label={i.label}
          active={activeCategory === i.category}
        />
      ))}
    </div>
  );
};

export default CategorySwitcher;
