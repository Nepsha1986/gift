import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getLocaleFromUrl, useTranslatedPath } from "@i18n/utils.ts";
import type { SupportedLocales } from "@i18n/ui.ts";
import styles from "./styles.module.scss";

const locales: Record<
  SupportedLocales,
  {
    label: string;
    short: string;
  }
> = {
  "en-us": {
    label: "United States - English",
    short: "EN",
  },
  "ru-ua": {
    label: "Украина - Русский",
    short: "RU",
  },
  "uk-ua": {
    label: "Україна - Українська",
    short: "UA",
  },
};

interface Props {
  pathname: string;
  direction?: "top" | "bottom";
  variant?: "dropdown" | "list";
}

const LangSwitcher: React.FC<Props> = ({
  pathname,
  direction = "bottom",
  variant = "dropdown",
}) => {
  const activeLocale = getLocaleFromUrl(pathname);
  const path = "/" + pathname.split("/").slice(2).join("/");

  const links = (Object.keys(locales) as SupportedLocales[]).map((i) => {
    const translatePath = useTranslatedPath(i);
    const active = i === activeLocale;

    return (
      <li key={i} className={styles.langSwitcher__item}>
        <a
          href={active ? undefined : translatePath(path)}
          aria-current={active ? "true" : undefined}
          lang={i}
          className={classNames(styles.langSwitcher__link, {
            [styles.langSwitcher__link_active]: active,
          })}
        >
          <span className={styles.langSwitcher__short}>{locales[i].short}</span>
          {locales[i].label}
        </a>
      </li>
    );
  });

  if (variant === "list") {
    return (
      <ul
        className={classNames(
          styles.langSwitcher__list,
          styles.langSwitcher__list_static,
        )}
      >
        {links}
      </ul>
    );
  }

  const classname = classNames(styles.langSwitcher, {
    [styles.langSwitcher_dropdownBottom]: direction === "bottom",
    [styles.langSwitcher_dropdownTop]: direction === "top",
  });

  return (
    <div className={classname}>
      <button
        type="button"
        className={styles.langSwitcher__toggle}
        aria-haspopup="true"
        title={locales[activeLocale].label}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <span>{locales[activeLocale].short}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={styles.langSwitcher__chevron}
        />
      </button>

      <div className={styles.langSwitcher__dropdown}>
        <ul className={styles.langSwitcher__list}>{links}</ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
