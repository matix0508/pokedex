import React, { FC } from "react";

interface IBoxItem {
  label: string;
}

export const BoxItem: FC<IBoxItem> = ({ label, children }) => {
  return (
    <li>
      <span>{label}</span>: {children}
    </li>
  );
};
