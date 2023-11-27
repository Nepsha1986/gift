import React, { useEffect, useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Button } from "@src/common";

import styles from "./styles.module.scss";

interface Props {
  navigation: React.ReactNode;
}

const MobileMenu: React.FC<Props> = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const handleOnClickMenu = (): void => {
    setIsActive((isActive) => !isActive);
  };

  useEffect(() => {
    if (isActive) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isActive]);

  const classname = classNames(styles.mobileMenu, {
    [styles.mobileMenu_active]: isActive,
  });

  return (
    <div className={classname}>
      <Button iconOnly onClick={handleOnClickMenu} color="transparent">
        <FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faBars} />
      </Button>

      <div className={styles.mobileMenu__nav}>
        <Button iconOnly onClick={handleOnClickMenu} color="transparent">
          <FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faClose} />
        </Button>

        <div style={{ marginTop: "2rem" }}>{navigation}</div>
      </div>

      <div className={styles.mobileMenu__overlay} onClick={handleOnClickMenu} />
    </div>
  );
};

export default MobileMenu;
