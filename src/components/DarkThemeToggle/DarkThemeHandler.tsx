import { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { darkModeSelector } from "../../app/selectors";

export const DarkThemeHandler = ({ children }: { children: ReactNode }) => {
  const dark = useAppSelector(darkModeSelector);
  return <div className={dark ? "dark" : "light"}>{children}</div>;
};
