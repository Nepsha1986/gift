import { type ReactNode, useEffect, useRef, useState } from "react";

const Dialog = ({
  open,
  children,
  onClickClose,
}: {
  open: boolean;
  children: ReactNode;
  onClickClose: () => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef}>
      {children}

      <button onClick={onClickClose}>Close</button>
    </dialog>
  );
};

export default Dialog;
