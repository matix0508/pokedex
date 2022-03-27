/* eslint-disable react/jsx-key */
import React, { FC, useEffect, useState } from "react";
import { useSortBy, useTable } from "react-table";
import styles from "./Table.module.scss";
import { Pokemon } from "../../types/Pokemon";

interface ITable {
  rawData: Pokemon[];
  onClick: (ex: Pokemon) => void;
}

interface IColumn {
  Header: string;
  accessor: string;
  Cell?: (props: any) => any;
  disableSortBy?: boolean
}

enum Sorted {
  NotSorted,
  Ascending,
  Descending,
}

const getColumns:IColumn[] = [
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
      disableSortBy: true
    },
    {
      Header: "Sprite",
      accessor: "sprite",
      Cell: (tableProps: any) => (
        <img src={tableProps.row.original.sprite} width={60} alt={"Pokemon"} />
      ),
      disableSortBy: true
    },
  ];

export const Table: FC<ITable> = ({ rawData, onClick }) => {
  const columns = React.useMemo(
    () => (getColumns),
    []
  );

  const data = React.useMemo(() => rawData, [rawData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>(
      {
        data,
        columns,
      },
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
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
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
