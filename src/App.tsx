import { useEffect, useState } from "react";
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

const getCounterValue = (state: RootState) => state.counter.value;

export default function App() {
  const [current, setCurrent] = useState<Pokemon>();

  const tab = useAppSelector(getCounterValue);
  const status = useAppSelector((state) => state.counter.status);

  useAlertIfFetchFail(status);
  const { fetchNext } = useFetchPokemons(tab);

  return (
    <div className={classNames([styles.App, "bg"])}>
      <DarkThemeToggle />
      <Counter pokemons={tab.length} />
      <header className={classNames([styles.App__header, "bg"])}>
        <h1>Pokedex</h1>
        <Button onClick={fetchNext}>
          {status === "loading"
            ? "Catching them..."
            : "Bring Me MORE Pokemons!"}
        </Button>
      </header>
      <main className={styles.App__main}>
        <Table rawData={tab} onClick={setCurrent} />
        <Box pokemon={current} reset={() => setCurrent(undefined)} />
      </main>
    </div>
  );
}

function useAlertIfFetchFail(status: RootState["counter"]["status"]) {
  useEffect(() => {
    if (status === "failed") {
      alert("Could not fetch pokemons. Try again later.");
    }
  }, [status]);
}

function useFetchPokemons(tab: Pokemon[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AddPokemons(0));
  }, [dispatch]);

  return {
    fetchNext: () => {
      dispatch(AddPokemons(tab.length));
    },
  };
}
