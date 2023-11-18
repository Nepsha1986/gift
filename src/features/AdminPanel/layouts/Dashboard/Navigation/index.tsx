import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faBagShopping,
  faPencil,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface NavItemProps {
  to: string;
  label: string;
  icon: IconDefinition;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => (
  <li className={styles.navigation__listItem}>
    <NavLink className={styles.navigation__link} end to={to}>
      <FontAwesomeIcon icon={icon} />{" "}
      <span style={{ marginLeft: "10px" }}>{label}</span>
    </NavLink>
  </li>
);

const Navigation: React.FC = () => (
  <ul className={styles.navigation}>
    <NavItem to="/admin" icon={faChartSimple} label="Overview" />
    <NavItem to="/admin/posts" icon={faPencil} label="Ideas" />
    <NavItem to="/admin/products" icon={faBagShopping} label="Products" />
  </ul>
);

export default Navigation;
