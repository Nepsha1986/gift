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
import translations from "./translations.ts";

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
  const t = useTranslations(lang as SupportedLanguages, translations);

  return (
    <section className={styles.featured}>
      <div className={styles.featured__container}>
        <header className={styles.featured__header}>
          <h1 className={styles.featured__heading}>{t("section.heading")}</h1>
          <p className={styles.featured__subheading}>
            {t("section.subheading")}
          </p>
        </header>

        <CategorySwitcher
          activeCategory={activeCategory}
          onClickCategory={setActiveCategory}
        />

        <div className={styles.featured__ideas}>
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
      </div>
    </section>
  );
};

export default FeaturedIdeas;
