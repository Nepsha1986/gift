import React from "react";
import Logo from "@src/assets/logo.svg";

import styles from "./styles.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
const Dashboard: React.FC<Props> = ({ children }) => {
  const { user, logout } = useAuth0();
  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboard__header}>
        <div className={styles.dashboard__logo}>
          <img src={Logo.src} alt="Logo" />
        </div>

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
          <nav className={styles.dashboard__nav}>Navigation</nav>
        </aside>

        <main className={styles.dashboard__main}>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
