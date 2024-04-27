import React, { FC } from "react";
import styles from "./Filter.module.scss";

export type NameFilterProps = {
  column: {
    filterValue: string;
    preFilteredRows: unknown[];
    setFilter: (arg: string | undefined) => void;
  };
};

export const NameFilter: FC<NameFilterProps> = ({
  column: {
    filterValue,
    preFilteredRows: { length: count },
    setFilter,
  },
}) => {
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
