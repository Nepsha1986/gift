import React, { useEffect, useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Button } from "@src/common";
import styles from "./styles.module.scss";

interface Props {
  navigation: React.ReactNode;
  footer?: React.ReactNode;
}

const MobileMenu: React.FC<Props> = ({ navigation, footer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClickMenu = (): void => {
    setIsActive((isActive) => !isActive);
  };

  useEffect(() => {
    if (isActive) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  const classname = classNames(styles.mobileMenu, {
    [styles.mobileMenu_active]: isActive,
  });

  return (
    <div className={classname}>
      <Button
        iconOnly
        onClick={handleOnClickMenu}
        color="transparent"
        ariaLabel="Open menu"
      >
        <FontAwesomeIcon style={{ fontSize: "1.25rem" }} icon={faBars} />
      </Button>

      <div className={styles.mobileMenu__nav} aria-hidden={!isActive}>
        <div className={styles.mobileMenu__head}>
          <Button
            iconOnly
            onClick={handleOnClickMenu}
            color="transparent"
            ariaLabel="Close menu"
          >
            <FontAwesomeIcon style={{ fontSize: "1.25rem" }} icon={faClose} />
          </Button>
        </div>

        <div className={styles.mobileMenu__body}>{navigation}</div>

        {footer && <div className={styles.mobileMenu__footer}>{footer}</div>}
      </div>

      <div className={styles.mobileMenu__overlay} onClick={handleOnClickMenu} />
    </div>
  );
};

export default MobileMenu;
