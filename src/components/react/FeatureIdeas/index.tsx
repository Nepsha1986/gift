import React, { useState } from "react";
import GiftCard from "@reactComponents/GiftCard";

import type { Category } from "@src/types/category.ts";
import CategorySwitcher from "./CategorySwitcher";

import styles from "./styles.module.scss";

interface Idea {
  slug: string;
  title: string;
  category: Category;
  description: string;
  link: string;
  imgSrc: string;
}

type FeatureIdeasProps = {
  featured: Idea[];
};
const FeatureIdeas: React.FC<FeatureIdeasProps> = ({ featured }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("for-women");
  const visible = featured.filter((i) => i.category === activeCategory);

  return (
    <section className={styles.featured}>
      <div className={styles.featured__container}>
        <header className={styles.featured__header}>
          <h1 className={styles.featured__heading}>Featured</h1>
          <p className={styles.featured__subheading}>
            If you need the greatest collection of HTML templates for your
            business, please visit TooCSS Blog. If you need to have a contact
            form PHP script, go to our contact page for more information.
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
                <div className={styles.featuredIdeas__item}>
                  <GiftCard
                    index={index + 1}
                    key={i.slug}
                    title={i.title}
                    description={i.description}
                    link={i.link}
                  >
                    {/*TODO: Review. THINK HOW TO OPTIMIZE?*/}
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

export default FeatureIdeas;
