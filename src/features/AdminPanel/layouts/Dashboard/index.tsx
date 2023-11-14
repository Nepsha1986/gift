import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import UserBlock from "./UserBlock";

import Logo from "@src/assets/logo.svg";
import styles from "./styles.module.scss";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const Dashboard: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboard__header}>
        <a className={styles.dashboard__logo} href="/">
          <img src={Logo.src} alt="Logo" />
        </a>

        <UserBlock />
      </header>

      <div className={styles.dashboard__flexContainer}>
        <aside className={styles.dashboard__sidebar}>
          <nav className={styles.dashboard__nav}>
            <Navigation />
          </nav>
        </aside>

        <main className={styles.dashboard__main}>
          <div className={styles.dashboard__mainContainer}>
            {children ?? <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
