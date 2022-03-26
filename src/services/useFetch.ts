import { Pokemon } from "../types/Pokemon";
import React, { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const resJson = await res.json();
      const pokemons: Pokemon[] = await resJson.results.map(async (item: any) => {
        const pokemon = await fetch(item.url);
        const pokemonJson = await pokemon.json();
        const output: Pokemon = {
          name: item.name,
          type: ["Any"],
          sprite: pokemonJson.sprites.front_default,
        };
        return output;
      });
      setLoading(false);
      Promise.all(pokemons).then((values) => {setData(values)});
    })();
  }, []);

  return { data, isLoading };
}
