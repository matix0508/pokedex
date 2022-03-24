import React, { FC } from "react";
import { Pokemon } from "../../types/Pokemon";
import styles from "./Box.module.scss";

interface IBox {
  pokemon: Pokemon;
}

export const Box: FC<IBox> = ({ pokemon }) => {
  return (
    <div className={styles.Box}>
      <div className={styles.Box__header}>{pokemon.name}</div>
      <div className={styles.Box__body}><ul>
          <li>Type: {pokemon.type}</li>
          <li>Sprite: {pokemon.sprite}</li>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          </ul></div>
    </div>
  );
};
