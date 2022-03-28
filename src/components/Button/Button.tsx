import React, { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IButton {
  onClick: () => void;
}

export const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={classNames([styles.Button, ])}>
      {children}
    </div>
  );
};
