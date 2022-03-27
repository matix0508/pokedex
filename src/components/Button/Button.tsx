import React, { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  onClick: () => void;
}

export const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.Button}>
      {children}
    </div>
  );
};
