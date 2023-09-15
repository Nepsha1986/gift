import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {
  faHome,
  faGift,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const navItems: [string, string | null, React.ReactNode][] = [
  ["", null, <FontAwesomeIcon icon={faHome} />],
  ["gifts", "Gifts", <FontAwesomeIcon icon={faGift} />],
  ["about", "About", <FontAwesomeIcon icon={faAddressCard} />],
  ["contacts", "Contacts", <FontAwesomeIcon icon={faPhone} />],
];

interface Props {
  currentPage: string;
}

const Navigation: React.FC<Props> = ({ currentPage }) => {
  const pageName = currentPage.split("/")[1];

  return (
    <nav className={styles.navigation}>
      {navItems.map((i) => {
        const navItemClass = classNames(styles.navigation__item, {
          [styles["navigation__item_active"]]: pageName === i[0],
        });

        return (
          <a key={i[0]} className={navItemClass} href={`/${i[0]}`}>
            <span className={styles.navigation__itemIcon}>{i[2]}</span>
            {!!i[1] && (
              <span className={styles.navigation__itemName}>{i[1]}</span>
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
