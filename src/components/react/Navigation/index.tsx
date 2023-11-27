import React from "react";
import { getCollection } from "astro:content";
import classNames from "classnames";

import {
  getCleanSlug,
  getLangFromUrl,
  getLocaleFromUrl,
  useTranslatedPath,
  useTranslations,
} from "@i18n/utils.ts";

import { ui } from "@i18n/ui.ts";

import type { NavTranslationStrings } from "@i18n/translations/navigation.ts";

import styles from "./styles.module.scss";

const giftsEntries = await getCollection("gifts");
const firstGiftItem = giftsEntries.filter(
  (i) => i.data.category === "for-women",
);

const navItems: Array<[string, NavTranslationStrings]> = [
  ["/", "nav.homepage"],
  [
    `/gifts/${firstGiftItem[0].data.category}/${getCleanSlug(
      firstGiftItem[0].slug,
    )}`,
    "nav.gifts",
  ],
  ["/about", "nav.about"],
  ["/contacts", "nav.contacts"],
];

interface Props {
  currentPage: string;
  type?: "desktop" | "mobile";
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
          >
            {t(i[1])}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
