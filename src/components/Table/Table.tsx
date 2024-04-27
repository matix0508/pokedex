import React, { FC } from "react";
import { Column, useFilters, useSortBy, useTable } from "react-table";
import styles from "./Table.module.scss";
import { Pokemon } from "../../types/Pokemon";
import { NameFilter } from "../Filter/NameFilter";
import { TypeFilter } from "../Filter/TypeFilter";
import classNames from "classnames";
type TableProps = {
  rawData: Pokemon[];
  onClick: (ex: Pokemon) => void;
};

const getColumns: Column<Pokemon>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (tableProps) => (
      <ul>
        {tableProps.row.original.type.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    disableSortBy: true,
    Filter: TypeFilter,
  },
  {
    Header: "Sprite",
    accessor: "sprite",
    Cell: (tableProps) => (
      <img src={tableProps.row.original.sprite} width={60} alt={"Pokemon"} />
    ),
    disableSortBy: true,
    disableFilters: true,
  },
];

export const Table: FC<TableProps> = ({ rawData, onClick }) => {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: NameFilter,
    }),
    []
  );

  const columns = React.useMemo(() => getColumns, []);

  const data = React.useMemo(() => rawData, [rawData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Pokemon>(
      {
        data,
        columns,
        defaultColumn,
      },
      useFilters,
      useSortBy
    );
  return (
    <div className={classNames([styles.Table, "primary"])}>
      <table {...getTableProps()}>
        <thead className="primary">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id}>
                  <span
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                  </span>

                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <tr className={styles.Table__noData}>
              <td>Try Catching Some more Pokemons</td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  role="row"
                  onClick={() => onClick(row.original)}
                  {...row.getRowProps()}
                  className="text-primaryH"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
