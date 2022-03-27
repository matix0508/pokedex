import React, { FC, useMemo } from "react";
import styles from "./Filter.module.scss";

interface ITypeFilter {
  column: {
    filterValue: string;
    setFilter: (arg: string | undefined) => void;
    preFilteredRows: any;
    id: number;
  };
}

export const TypeFilter: FC<ITypeFilter> = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = useMemo(() => {
    const options = new Set<string>();
    preFilteredRows.forEach((row: { values: string[][] }) => {
      row.values[id].forEach((t) => options.add(t));
    });
    return Array.from(options.values());
  }, [id, preFilteredRows]);
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
