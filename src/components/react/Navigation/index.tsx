import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCollection } from "astro:content";
import classNames from "classnames";
import {
  faHome,
  faGift,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import {
  getCleanSlug,
  getLangFromUrl,
  useTranslatedPath,
  useTranslations,
} from "@i18n/utils.ts";

import type { NavTranslationStrings } from "@i18n/translations/navigation.ts";

import styles from "./styles.module.scss";

const giftsEntries = await getCollection("gifts");
const firstGiftItem = giftsEntries.filter(
  (i) => i.data.category === "for-women",
);

const navItems: Array<
  [string, NavTranslationStrings | undefined, React.ReactNode]
> = [
  ["/", undefined, <FontAwesomeIcon key="homepage" icon={faHome} />],
  [
    `/gifts/${firstGiftItem[0].data.category}/${getCleanSlug(
      firstGiftItem[0].slug,
    )}`,
    "nav.gifts",
    <FontAwesomeIcon key="gift_page" icon={faGift} />,
  ],
  ["/about", "nav.about", <FontAwesomeIcon key="about" icon={faAddressCard} />],
  [
    "/contacts",
    "nav.contacts",
    <FontAwesomeIcon key="contact" icon={faPhone} />,
  ],
];

interface Props {
  currentPage: string;
}

const getParentFromUrl = (url: string): string => {
  const lang = getLangFromUrl(url);
  return lang === "en" ? url.split("/")[1] : url.split("/")[2];
};

const Navigation: React.FC<Props> = ({ currentPage }) => {
  const lang = getLangFromUrl(currentPage);
  const currentPageParent = getParentFromUrl(currentPage);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return (
    <nav className={styles.navigation}>
      {navItems.map((i) => {
        const navItemParent = getParentFromUrl(i[0]);
        const navItemClass = classNames(styles.navigation__item, {
          [styles.navigation__item_active]: currentPageParent === navItemParent,
        });

        return (
          <a
            key={i[0]}
            className={navItemClass}
            href={translatePath(`${i[0]}`)}
          >
            <span className={styles.navigation__itemIcon}>{i[2]}</span>
            {i[1] !== undefined && (
              <span className={styles.navigation__itemName}>{t(i[1])}</span>
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
