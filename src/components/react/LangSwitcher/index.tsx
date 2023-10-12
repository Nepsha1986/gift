import React from "react";
import classNames from "classnames";
import gbFlag from "@public/assets/GB.svg";
import ruFlag from "@public/assets/RU.svg";

import styles from "./styles.module.scss";

const languages = {
  en: {
    path: "/",
    label: "English",
    image: gbFlag.src,
  },
  ru: {
    path: "/ru",
    label: "Русский",
    image: ruFlag.src,
  },
};

interface Props {
  activeLang: keyof typeof languages;
}

const LangSwitcherItem = ({
  link,
  imageSrc,
  label,
  active = false,
}: {
  imageSrc: string;
  label: string;
  link?: string;
  active?: boolean;
}) => {
  const className = classNames(styles.langSwitcherItem, {
    [styles["langSwitcherItem_active"]]: active,
  });

  return (
    <a href={link} className={className}>
      <img
        src={imageSrc}
        alt={label}
        className={styles.langSwitcherItem__flag}
      />

      <span className={styles.langSwitcherItem__label}>{label}</span>
    </a>
  );
};

const LangSwitcher = ({ activeLang }: Props) => {
  return (
    <div className={styles.langSwitcher}>
      <LangSwitcherItem
        active
        label={languages[activeLang].label}
        imageSrc={languages[activeLang].image}
      />

      <ul className={styles.langSwitcher__list}>
        {Object.keys(languages).map((langCode) => {
          if (langCode === activeLang) return null;
          return (
            <li key={langCode} className={styles.langSwitcher__item}>
              <LangSwitcherItem
                link={languages[langCode as keyof typeof languages].path}
                label={languages[langCode as keyof typeof languages].label}
                imageSrc={languages[langCode as keyof typeof languages].image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LangSwitcher;
