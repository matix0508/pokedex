import { FC } from "react";
import { Pokemon } from "../../types/Pokemon";
import styles from "./Box.module.scss";
import classNames from "classnames";

type BoxProps = {
  pokemon?: Pokemon;
  reset: () => void;
};

export const Box: FC<BoxProps> = ({ pokemon, reset }) => {
  if (!pokemon) return null;
  return (
    <div className={classNames([styles.Box, "primary"])}>
      <div onClick={reset} className={styles.Box__close}>
        x
      </div>
      <div className={styles.Box__header}>
        <img src={pokemon.sprite} width={150} alt={pokemon.name} />
        {pokemon.name}
      </div>
      <div className={styles.Box__body}>
        <ul>
          <BoxItem label="Type">{pokemon.type.join(", ")}</BoxItem>
          <BoxItem label="Height">{pokemon.height}</BoxItem>
          <BoxItem label="Weight">{pokemon.weight}</BoxItem>
        </ul>
      </div>
    </div>
  );
};

const BoxItem: FC<{
  label: string;
}> = ({ label, children }) => (
  <li>
    <span>{label}</span>: {children}
  </li>
);
