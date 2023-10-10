import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const giftsEntries = await getCollection("gifts");
const firstGiftItem = giftsEntries.filter(
  (i) => i.data.category === "for-women",
);

import classNames from "classnames";
import {
  faHome,
  faGift,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { getCollection } from "astro:content";
import {
  getCleanSlug,
  getLangFromUrl,
  useTranslatedPath,
  useTranslations,
} from "@i18n/utils.ts";
import type { NavTranslationStrings } from "@i18n/ui.ts";
import LangSwitcher from "./LangSwitcher";

const navItems: [string, NavTranslationStrings | null, React.ReactNode][] = [
  ["", null, <FontAwesomeIcon icon={faHome} />],
  [
    `gifts/${firstGiftItem[0].data.category}/${getCleanSlug(
      firstGiftItem[0].slug,
    )}`,
    "nav.gifts",
    <FontAwesomeIcon icon={faGift} />,
  ],
  ["about", "nav.about", <FontAwesomeIcon icon={faAddressCard} />],
  ["contacts", "nav.contacts", <FontAwesomeIcon icon={faPhone} />],
];

interface Props {
  currentPage: string;
}

const Navigation: React.FC<Props> = ({ currentPage }) => {
  const currentPageParent = currentPage.split("/")[1];
  const lang = getLangFromUrl(currentPage);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return (
    <nav className={styles.navigation}>
      {navItems.map((i) => {
        const navItemParent = i[0].split("/")[0];
        const navItemClass = classNames(styles.navigation__item, {
          [styles["navigation__item_active"]]:
            currentPageParent === navItemParent,
        });

        return (
          <a
            key={i[0]}
            className={navItemClass}
            href={translatePath(`/${i[0]}`)}
          >
            <span className={styles.navigation__itemIcon}>{i[2]}</span>
            {!!i[1] && (
              <span className={styles.navigation__itemName}>{t(i[1])}</span>
            )}
          </a>
        );
      })}
      <LangSwitcher
        languages={[
          {
            lang: "en",
            path: "/",
          },
          {
            lang: "ru",
            path: "/ru",
          },
        ]}
      />
    </nav>
  );
};

export default Navigation;
