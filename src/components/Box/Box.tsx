import React, { FC } from "react";
import { Pokemon } from "../../types/Pokemon";
import styles from "./Box.module.scss";
import { BoxItem } from "../BoxItem/BoxItem";

interface IBox {
  pokemon: Pokemon;
}

export const Box: FC<IBox> = ({ pokemon }) => {
  return (
    <div className={styles.Box}>
      <div className={styles.Box__header}>{pokemon.name}</div>
      <div className={styles.Box__body}>
        <ul>
          <BoxItem label="Type">{pokemon.type}</BoxItem>
          <BoxItem label="Sprite">{pokemon.sprite}</BoxItem>
          <BoxItem label="Height">{pokemon.height}</BoxItem>
          <BoxItem label="Weight">{pokemon.weight}</BoxItem>
        </ul>
      </div>
    </div>
  );
};
