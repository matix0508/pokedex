import React, { useState } from "react";
import styles from "./App.module.scss";
import { Pokemon } from "./types/Pokemon";
import { Table } from "./components/Table/Table";
import { Box } from "./components/Box/Box";
import { Button } from "./components/Button/Button";
import { useQuery } from "react-query";
import { useFetch } from "./services/useFetch";

// const data: Pokemon[] = [
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//     height: 12,
//     weight: 31,
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name:"Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
//   {
//     name: "Pikachu",
//     type: "Yelow",
//     sprite: "Yes?",
//   },
// ];

function App() {
  const [current, setCurrent] = useState<Pokemon>();
  const {data, isLoading} = useFetch();
  if (isLoading) return <>Loading...</>;

  if (!data) {return <>No data</>}





  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <Button>Bring Me new Pokemons!</Button>
      </header>
      <main className={styles.App}>
        <Table
          rawData={data}
          onClick={(p: Pokemon) => {
            setCurrent(p);
          }}
        />
        <div className={styles.App__box}>
          {!!current ? <Box pokemon={current} /> : <></>}
        </div>
      </main>
    </>
  );
}

export default App;
