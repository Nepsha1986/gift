import React, { type ReactNode, useEffect, useRef } from "react";
import Button from "@reactComponents/Button";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Dialog: React.FC<{
  open: boolean;
  children: ReactNode;
  heading?: string;
  onClickClose: () => void;
}> = ({ open, children, onClickClose, heading }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.dialog__header}>
        {!!heading && <h3 style={{ marginBottom: 0 }}>{heading}</h3>}

        <div className={styles.dialog__closeBtn}>
          <Button onClick={onClickClose} iconOnly>
            <FontAwesomeIcon key="gift_page" icon={faClose} />
          </Button>
        </div>
      </header>

      <div className={styles.dialog__main}>{children}</div>
    </dialog>
  );
};

export default Dialog;