import React from "react";
import classNames from "classnames";
import gbFlag from "@public/assets/GB.svg";
import ruFlag from "@public/assets/RU.svg";

import styles from "./styles.module.scss";
import { getLangFromUrl, useTranslatedPath } from "@i18n/utils.ts";

const languages = {
  en: {
    label: "English",
    image: gbFlag.src,
  },
  ru: {
    label: "Русский",
    image: ruFlag.src,
  },
};

interface Props {
  pathname: string;
}

const LangSwitcherItem: React.FC<{
  imageSrc: string;
  label: string;
  link?: string;
  active?: boolean;
}> = ({ link, imageSrc, label, active = false }) => {
  const className = classNames(styles.langSwitcherItem, {
    [styles.langSwitcherItem_active]: active,
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

const LangSwitcher: React.FC<Props> = ({ pathname }) => {
  const activeLang = getLangFromUrl(pathname);
  const path =
    activeLang === "en"
      ? pathname
      : "/" + pathname.split("/").slice(2).join("/");

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
          const translatePath = useTranslatedPath(
            langCode as keyof typeof languages,
          );

          return (
            <li key={langCode} className={styles.langSwitcher__item}>
              <LangSwitcherItem
                link={translatePath(path)}
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
