import React, { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

interface IButton {
  onClick: () => void;
}

export const Button: FC<IButton> = ({ children, onClick }) => {
  const dark = useAppSelector((state: RootState) => state.darkMode.dark)
  return (
    <div onClick={onClick} className={classNames([styles.Button, {secondary: !dark, "secondary-dark": dark}])}>
      {children}
    </div>
  );
};
