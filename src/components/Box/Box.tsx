import React, { FC } from "react";
import { Pokemon } from "../../types/Pokemon";
import styles from "./Box.module.scss";
import { BoxItem } from "../BoxItem/BoxItem";
import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

interface IBox {
  pokemon: Pokemon;
}

export const Box: FC<IBox> = ({ pokemon }) => {

  const dark = useAppSelector((state: RootState) => state.darkMode.dark)
  return (
    <div className={classNames([styles.Box, {primary: !dark, "primary-dark": dark}])}>
      <div className={styles.Box__header}>
        <img src={pokemon.sprite} width={150} alt={pokemon.name} />
        {pokemon.name}
        </div>
      <div className={classNames([styles.Box__body])}>
        
        <ul>
          <BoxItem label="Type">
            {pokemon.type.join(", ")}
            </BoxItem>
          <BoxItem label="Height">{pokemon.height}</BoxItem>
          <BoxItem label="Weight">{pokemon.weight}</BoxItem>
        </ul>
      </div>
    </div>
  );
};
