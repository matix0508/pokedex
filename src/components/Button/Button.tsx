import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames([styles.Button, "secondary", className])}
      {...rest}
    >
      {children}
    </button>
  );
};
