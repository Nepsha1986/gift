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
import categoryTabs from "@i18n/translations/categoryTabs.ts";

import styles from "./styles.module.scss";

// Two even rows on desktop; the full list lives on the gift pages
const MAX_VISIBLE = 6;

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
  const visible = featured
    .filter((i) => i.category === activeCategory)
    .slice(0, MAX_VISIBLE);

  const translatePath = useTranslatedPath(locale);
  const t = useTranslations(lang, categoryTabs);

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

      <div className={styles.featuredIdeas} key={activeCategory}>
        {!!visible.length &&
          visible.map((i) => (
            <div className={styles.featuredIdeas__item} key={i.slug}>
              <GiftCard
                key={i.slug}
                title={i.title}
                description={i.description}
                category={i.category}
                variant="tile"
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
