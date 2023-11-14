import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";

import Logo from "@src/assets/logo.svg";
import styles from "./styles.module.scss";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const { user, logout } = useAuth0();
  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboard__header}>
        <a className={styles.dashboard__logo} href="/">
          <img src={Logo.src} alt="Logo" />
        </a>

        <div style={{ color: "#fff" }}>
          Hello, {user?.name}
          <button
            onClick={() => {
              void logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              });
            }}
          >
            Logout
          </button>
        </div>
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
