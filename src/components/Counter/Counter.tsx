import classNames from "classnames";
import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import styles from "./Counter.module.scss";

interface ICounter {
    pokemons: number
}


export const Counter:FC<ICounter> = ({pokemons}) => {
  const dark = useAppSelector((state: RootState) => state.darkMode.dark)
  return <div className={styles.Counter}><h3>Your Pokemons:</h3><div className={classNames([styles.Counter__number, {primary: !dark, "primary-dark": dark}])}>{pokemons}</div></div>;
};
