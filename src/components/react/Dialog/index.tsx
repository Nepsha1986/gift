import React, { type ReactNode, useEffect, useRef } from "react";
import Button from "@reactComponents/Button";

import styles from "./styles.module.scss";

const Dialog: React.FC<{
  open: boolean;
  children: ReactNode;
  onClickClose: () => void;
}> = ({ open, children, onClickClose }) => {
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
      {children}

      <Button onClick={onClickClose} color="primary" text="Close" />
    </dialog>
  );
};

export default Dialog;
