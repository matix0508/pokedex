/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import {
  Column,
  FilterTypes,
  useFilters,
  useSortBy,
  useTable,
} from "react-table";
import styles from "./Table.module.scss";
import { Pokemon } from "../../types/Pokemon";
import { NameFilter } from "../Filter/NameFilter";
import { TypeFilter } from "../Filter/TypeFilter";

interface ITable {
  rawData: Pokemon[];
  onClick: (ex: Pokemon) => void;
}

const getColumns: Column<Pokemon>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (tableProps: any) => (
      <ul>
        {tableProps.row.original.type.map((item: string, i: number) => (
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
    Cell: (tableProps: any) => (
      <img src={tableProps.row.original.sprite} width={60} alt={"Pokemon"} />
    ),
    disableSortBy: true,
    disableFilters: true,
  },
];

export const Table: FC<ITable> = ({ rawData, onClick }) => {
  const filterTypes: FilterTypes<Pokemon> = React.useMemo(
    () => ({
      text: (rows, filterValue, id) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
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
        filterTypes,
      },
      useFilters,
      useSortBy
    );

  // Render the UI for your table
  return (
    <div className={styles.Table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                onClick={() => {
                  onClick(row.original);
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
