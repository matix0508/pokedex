import { FC } from "react";
import { toggle } from "../../features/darkModeSlice";
import { useAppDispatch } from "../../app/hooks";
import { Icon } from "./Icon";
import styles from "./DarkThemeToggle.module.scss";
import classNames from "classnames";

export const DarkThemeToggle: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={classNames([styles.DarkThemeToggle, "primary"])}
      onClick={() => dispatch(toggle())}
    >
      <Icon />
    </div>
  );
};
