import React, { useState } from "react";

import { Button } from "@src/common";
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
  categoryLinks: Record<Category, string>;
  featured: Idea[];
}

const FeaturedIdeas: React.FC<FeaturedIdeasProps> = ({
  featured,
  categoryLinks,
  lang,
  locale,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("for-women");
  const visible = featured.filter((i) => i.category === activeCategory);

  const translatePath = useTranslatedPath(locale);

  const t = useTranslations(lang, translations);
  const t2 = useTranslations(lang, categories);

  const items: Array<{ category: Category; label: string }> = [
    {
      category: "for-women",
      label: t2("for-women"),
    },
    {
      category: "for-men",
      label: t2("for-men"),
    },
    {
      category: "for-teens",
      label: t2("for-teens"),
    },
    {
      category: "for-kids",
      label: t2("for-kids"),
    },
  ];

  return (
    <section className={styles.featured}>
      <div className={styles.featured__container}>
        <header className={styles.featured__header}>
          <h1 className={styles.featured__heading}>{t("section.heading")}</h1>
          <div
            className={styles.featured__subheading}
            dangerouslySetInnerHTML={{ __html: t("section.subheading") }}
          />
        </header>

        <CategorySwitcher
          items={items}
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

        <div className={styles.featured__btn}>
          <Button
            color="primary"
            link={translatePath(categoryLinks[activeCategory])}
          >
            {t("section.btn_text")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIdeas;
