import React, { useState } from "react";

import GiftCard from "@reactComponents/GiftCard";
import type { Category } from "@src/types/category.ts";
import CategorySwitcher from "./CategorySwitcher";

import { type SupportedLanguages, type SupportedLocales } from "@i18n/ui.ts";
import {
  getCleanSlug,
  useTranslatedPath,
  useTranslations,
} from "@i18n/utils.ts";
import categories from "@i18n/translations/categories.ts";

import styles from "./styles.module.scss";

interface Idea {
  slug: string;
  title: string;
  category: Category;
  description: string;
  link: string;
  imgSrc: string;
}

interface FeaturedIdeasProps {
  lang: SupportedLanguages;
  locale: SupportedLocales;
  featured: Idea[];
}

const FeaturedIdeas: React.FC<FeaturedIdeasProps> = ({
  featured,
  lang,
  locale,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("for-women");
  const visible = featured.filter((i) => i.category === activeCategory);

  const translatePath = useTranslatedPath(locale);
  const t = useTranslations(lang, categories);

  const items: Array<{ category: Category; label: string }> = [
    {
      category: "for-women",
      label: t("for-women"),
    },
    {
      category: "for-men",
      label: t("for-men"),
    },
    {
      category: "for-teens",
      label: t("for-teens"),
    },
    {
      category: "for-kids",
      label: t("for-kids"),
    },
  ];

  return (
    <div>
      <CategorySwitcher
        items={items}
        activeCategory={activeCategory}
        onClickCategory={setActiveCategory}
      />

      <div className={styles.featuredIdeas}>
        {!!visible.length &&
          visible.map((i, index) => (
            <div className={styles.featuredIdeas__item} key={i.slug}>
              <GiftCard
                index={index + 1}
                key={i.slug}
                title={i.title}
                description={i.description}
                link={translatePath(
                  `/gifts/${i.category}/${getCleanSlug(i.slug)}`,
                )}
              >
                {/* TODO: Review. THINK HOW TO OPTIMIZE? */}
                <img
                  src={i.imgSrc}
                  alt={i.title}
                  className="img-cover"
                  loading="lazy"
                />
              </GiftCard>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedIdeas;
