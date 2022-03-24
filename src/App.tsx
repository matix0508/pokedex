import React from "react";
import "./App.scss";
import classNames from "classnames";
import { Pokemon } from "./types/Pokemon";
import { Table } from './components/Table/Table';

const data:Pokemon[] = [
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?"
  },
]

function App() {
  return (
    <main className={classNames(["App"])}>
      <Table rawData={data} onClick={() => {}}/>
    </main>
  );
}

export default App;
