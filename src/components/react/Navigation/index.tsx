import React from "react";
import classNames from "classnames";

import {
  getLangFromUrl,
  getLocaleFromUrl,
  useTranslatedPath,
  useTranslations,
} from "@i18n/utils.ts";

import { ui } from "@i18n/ui.ts";

import type { NavTranslationStrings } from "@i18n/translations/navigation.ts";

import styles from "./styles.module.scss";

const navItems: Array<[string, NavTranslationStrings]> = [
  ["/", "nav.homepage"],
  ["/gifts", "nav.gifts"],
  ["/posts", "nav.posts"],
  ["/about", "nav.about"],
  ["/contacts", "nav.contacts"],
];

interface Props {
  currentPage: string;
  type?: "desktop" | "mobile" | "footer";
}

const getParentFromUrl = (url: string): string => {
  return url.split("/")[2];
};

const Navigation: React.FC<Props> = ({ currentPage, type = "desktop" }) => {
  const locale = getLocaleFromUrl(currentPage);
  const lang = getLangFromUrl(currentPage);
  const currentPageParent = getParentFromUrl(currentPage);
  const t = useTranslations(lang, ui);
  const translatePath = useTranslatedPath(locale);

  const classname = classNames(styles.navigation, {
    [styles.navigation_desctop]: type === "desktop",
    [styles.navigation_mobile]: type === "mobile",
    [styles.navigation_footer]: type === "footer",
  });

  return (
    <nav className={classname}>
      {navItems.map((i) => {
        const navItemParent = i[0].split("/")[1];
        const navItemClass = classNames(styles.navigation__item, {
          [styles.navigation__item_active]: currentPageParent === navItemParent,
        });

        return (
          <a
            key={i[0]}
            className={navItemClass}
            href={translatePath(`${i[0]}`)}
            aria-current={
              currentPageParent === navItemParent ? "page" : undefined
            }
          >
            {t(i[1])}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
