import React, { FC, useMemo } from "react";
import styles from "./Filter.module.scss";

type TypeFilterProps = {
  column: {
    filterValue: string;
    setFilter: (arg: string | undefined) => void;
    preFilteredRows: { values: string[][] }[];
    id: number;
  };
};

export const TypeFilter: FC<TypeFilterProps> = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = useMemo(
    () =>
      preFilteredRows
        .flatMap((row) => row.values[id])
        .filter((v, idx, arr) => arr.indexOf(v) === idx),
    [id, preFilteredRows]
  );

  return (
    <select
      className={styles.Filter}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
