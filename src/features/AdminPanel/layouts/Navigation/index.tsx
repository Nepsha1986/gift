import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Navigation = () => (
  <ul className={styles.navigation}>
    <li className={styles.navigation__listItem}>
      <NavLink className={styles.navigation__link} end to="/admin">
        Overview
      </NavLink>
    </li>

    <li className={styles.navigation__listItem}>
      <NavLink
        className={styles.navigation__link}
        end
        to="/admin/related-products"
      >
        Products
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
