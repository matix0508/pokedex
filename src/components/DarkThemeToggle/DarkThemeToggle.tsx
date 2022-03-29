import React, { FC } from "react";
import { toggle } from "../../features/darkModeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Icon } from "../Icon";
import styles from "./DarkThemeToggle.module.scss";
import classNames from "classnames";

export const DarkThemeToggle: FC = () => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state: RootState) => state.darkMode.dark);
  return (
    <div className={classNames([styles.DarkThemeToggle, {primary: !dark, "primary-dark": dark}])} onClick={() => dispatch(toggle())}>
      <Icon dark={dark} />
    </div>
  );
};
