import React, { useState } from "react";
import styles from "./App.module.scss";
import { Pokemon } from "./types/Pokemon";
import { Table } from "./components/Table/Table";
import { Box } from "./components/Box/Box";

const data: Pokemon[] = [
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
  {
    name: "Pikachu",
    type: "Yelow",
    sprite: "Yes?",
  },
];

function App() {
  const [current, setCurrent] = useState<Pokemon>();
  return (
    <>
      <main className={styles.App}>
        <Table
          rawData={data}
          onClick={(p: Pokemon) => {
            setCurrent(p);
          }}
        />
        {!!current ? <Box pokemon={current} /> : <></>}
      </main>
    </>
  );
}

export default App;
