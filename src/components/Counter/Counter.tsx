import classNames from "classnames";
import { FC } from "react";
import styles from "./Counter.module.scss";

type CounterProps = {
  pokemons: number;
};

export const Counter: FC<CounterProps> = ({ pokemons }) => {
  return (
    <div className={styles.Counter}>
      <h3>Your Pokemons:</h3>
      <div className={classNames([styles.Counter__number, "primary"])}>
        {pokemons}
      </div>
    </div>
  );
};
