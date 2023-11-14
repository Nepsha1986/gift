import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "./styles.module.scss";

const UserBlock: React.FC = () => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    void logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className={styles.userBlock}>
      <div className={styles.userBlock__greetings}>Welcome, {user?.name}</div>

      <button className={styles.userBlock__btn} onClick={handleLogout}>
        <FontAwesomeIcon
          style={{ marginRight: "10px" }}
          icon={faRightFromBracket}
          size="sm"
        />

        <span>Log out</span>
      </button>
    </div>
  );
};

export default UserBlock;
