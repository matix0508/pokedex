import React, { FC } from "react";
import styles from "./Filter.module.scss";

export interface INameFilter {
  column: {
    filterValue: string;
    preFilteredRows: any;
    setFilter: (arg: string | undefined) => void;
  };
}

export const NameFilter: FC<INameFilter> = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;
  return (
    <input
      className={styles.Filter}
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} pokemons`}
    />
  );
};
