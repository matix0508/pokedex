import React, { FC } from "react";
import styles from "./Counter.module.scss";

interface ICounter {
    pokemons: number
}


export const Counter:FC<ICounter> = ({pokemons}) => {
  return <div className={styles.Counter}>{pokemons}</div>;
};
