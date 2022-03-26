/* eslint-disable react/jsx-key */
import React, { FC, JSXElementConstructor } from "react";
import { useTable } from "react-table";
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
}

function getColumn(name: string) {
  let output: IColumn = {
    Header: name,
    accessor: name.toLowerCase(),
  };
  if (name === "Sprite") {
    output = {
      ...output,
      Cell: (tableProps: any) => (
        <img src={tableProps.row.original.sprite} width={60} alt={"Pokemon"} />
      ),
    }
  } else if (name === "Type") {
    output = {
      ...output,
      Cell: (tableProps: any) => (
        <ul>
          <li>{tableProps.row.original.type}</li>
        </ul>
      )
    }
  }
  return output;
}

function getColumns() {
  return ["Name", "Type", "Sprite"];
}

export const Table: FC<ITable> = ({ rawData, onClick }) => {
  const columns = React.useMemo(
    () => getColumns().map((c) => getColumn(c)),
    []
  );
  console.log(rawData);

  const data = React.useMemo(() => rawData, [rawData]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <div className={styles.Table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
