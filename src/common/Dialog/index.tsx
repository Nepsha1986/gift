import React, { type ReactNode, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Button } from "src/common";

import classNames from "classnames";
import styles from "./styles.module.scss";

const Dialog: React.FC<{
  open: boolean;
  children: ReactNode;
  onClickClose?: () => void;
  size?: "small" | "medium" | "large";
  heading?: string;
  footer?: React.ReactNode | React.ReactNode[];
}> = ({ open, children, onClickClose, heading, footer, size = "small" }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onAnimationEnd = (): void => {
    if (!open) dialogRef.current?.close();
  };

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
  }, [open]);

  const className = classNames(styles.dialog, {
    [styles[`dialog_${size}`]]: size,
    [styles.dialog_dissapear]: !open,
  });

  return (
    <dialog
      className={className}
      ref={dialogRef}
      onAnimationEnd={onAnimationEnd}
    >
      <header className={styles.dialog__header}>
        {!!heading && <h3 style={{ marginBottom: 0 }}>{heading}</h3>}

        <div className={styles.dialog__closeBtn}>
          {onClickClose && (
            <Button onClick={onClickClose} iconOnly color="transparent">
              <FontAwesomeIcon icon={faClose} />
            </Button>
          )}
        </div>
      </header>

      <div className={styles.dialog__main}>{children}</div>

      {footer && <footer className={styles.dialog__footer}>{footer}</footer>}
    </dialog>
  );
};

export default Dialog;
