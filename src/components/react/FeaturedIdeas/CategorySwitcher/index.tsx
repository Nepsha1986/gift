import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
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
  const listRef = useRef<HTMLDivElement>(null);
  // Tabs are sized by their labels, so the indicator follows the real tab box.
  // Until it is measured, the active tab paints its own background.
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = (): void => {
      const active = list.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!active) return;

      setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
      // Keep the active tab visible when the row scrolls horizontally
      if (list.scrollWidth > list.clientWidth) {
        list.scrollTo({
          left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
          behavior: "smooth",
        });
      }
    };

    measure();
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [activeCategory, items]);

  return (
    <div
      ref={listRef}
      className={classNames(styles.categorySwitcher, {
        [styles.categorySwitcher_measured]: !!indicator,
      })}
      role="tablist"
    >
      {indicator && (
        <div
          data-category={activeCategory}
          className={styles.categorySwitcher__activeIndicator}
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.left}px)`,
          }}
        />
      )}

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
