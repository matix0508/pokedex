import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Pokemon } from "./types/Pokemon";
import { Table } from "./components/Table/Table";
import { Box } from "./components/Box/Box";
import { Button } from "./components/Button/Button";
import { AddPokemons } from "./features/pokemonSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";

function App() {
  const [current, setCurrent] = useState<Pokemon>();
  const dispatch = useAppDispatch();
  const tab = useAppSelector((state: RootState) => state.counter.value);
  const status = useAppSelector((state: RootState) => state.counter.status);

  useEffect(() => {
    dispatch(AddPokemons(0));
  }, [dispatch]);

  switch (status) {
    case "loading":
      return <>Loading...</>;
    case "failed":
      return <>An Error Has occured</>;
  }

  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <Button
          onClick={() => {
            dispatch(AddPokemons(tab.length));
          }}
        >
          Bring Me new Pokemons!
        </Button>
      </header>
      <main className={styles.App}>
        <Table
          rawData={tab}
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
