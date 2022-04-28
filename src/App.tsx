import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Pokemon } from "./types/Pokemon";
import { Table } from "./components/Table/Table";
import { Box } from "./components/Box/Box";
import { Button } from "./components/Button/Button";
import { AddPokemons } from "./features/pokemonSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Counter } from "./components/Counter/Counter";
import classNames from "classnames";
import { DarkThemeToggle } from "./components/DarkThemeToggle/DarkThemeToggle";
import { RootState } from "./app/store";

const loadingText = "Catching them...";
const idleText = "Bring Me MORE Pokemons!";

const getCounterValue = (state: RootState) => state.counter.value;


export default function App() {
  const [current, setCurrent] = useState<Pokemon>();
  const dispatch = useAppDispatch();
  // const tab = useAppSelector(getCounterValue);
  const tab = useAppSelector(getCounterValue);
  const status = useAppSelector((state) => state.counter.status);
  const dark = useAppSelector((state) => state.darkMode.dark);

  useEffect(() => {
    dispatch(AddPokemons(0));
  }, [dispatch]);



  useEffect(() => {
    if (status === "failed") {
      alert("An Error Has occured")
    }
  }, [status])

  return (
    <div className={classNames([styles.App, { bg: !dark, "bg-dark": dark }])}>
      <DarkThemeToggle />
      <Counter pokemons={tab.length} />
      <header
        className={classNames([
          styles.App__header,
          { bg: !dark, "bg-dark": dark },
        ])}
      >
        <h1>Pokedex</h1>
        <Button
          onClick={() => {
            dispatch(AddPokemons(tab.length));
          }}
        >
          {status === "loading" ? loadingText : idleText}
        </Button>
      </header>
      <main className={styles.App__main}>
        <Table rawData={tab} onClick={setCurrent} />
        {!!current && (
          <Box pokemon={current} reset={() => setCurrent(undefined)} />
        )}
      </main>
    </div>
  );
}
