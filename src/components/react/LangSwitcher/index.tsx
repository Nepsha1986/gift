import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { getLocaleFromUrl, useTranslatedPath } from "@i18n/utils.ts";
import type { SupportedLocales } from "@i18n/ui.ts";

import styles from "./styles.module.scss";

const locales: Record<
  SupportedLocales,
  {
    label: string;
  }
> = {
  "en-us": {
    label: "United States - English",
  },
  "ru-ua": {
    label: "Украина - Русский",
  },
  "uk-ua": {
    label: "Україна - Українська",
  },
};

interface Props {
  pathname: string;
}

const LangSwitcherItem: React.FC<{
  label: string;
  link?: string;
  active?: boolean;
}> = ({ link, label, active = false }) => {
  const className = classNames(styles.langSwitcherItem, {
    [styles.langSwitcherItem_active]: active,
  });

  return (
    <a href={link} className={className}>
      <span className={styles.langSwitcherItem__label}>{label}</span>
      {active && (
        <span className={styles.langSwitcherItem__icon}>
          <FontAwesomeIcon size="sm" icon={faGlobe} />
        </span>
      )}
    </a>
  );
};

const LangSwitcher: React.FC<Props> = ({ pathname }) => {
  const activeLocale = getLocaleFromUrl(pathname);
  const path = "/" + pathname.split("/").slice(2).join("/");

  return (
    <div className={styles.langSwitcher}>
      <LangSwitcherItem active label={locales[activeLocale].label} />

      <ul className={styles.langSwitcher__list}>
        {Object.keys(locales).map((i) => {
          if (i === activeLocale) return null;

          const translatePath = useTranslatedPath(i as keyof typeof locales);

          return (
            <li key={i} className={styles.langSwitcher__item}>
              <LangSwitcherItem
                link={translatePath(path)}
                label={locales[i as keyof typeof locales].label}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LangSwitcher;
