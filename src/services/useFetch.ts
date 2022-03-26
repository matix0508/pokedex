import { Pokemon } from "../types/Pokemon";
import { TypeApi } from "../types/TypeApi";
import { useState, useEffect } from "react";
import { ResultApi } from "../types/ResultApi";

export function useFetch() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const resJson = await res.json();
      const pokemons: Pokemon[] = await resJson.results.map(async (item: ResultApi) => {
        const pokemon = await fetch(item.url);
        const pokemonJson = await pokemon.json();
        const output: Pokemon = {
          name: item.name,
          type: pokemonJson.types.map((item: TypeApi) => item.type.name),
          sprite: pokemonJson.sprites.front_default,
          height: pokemonJson.height,
          weight: pokemonJson.weight
        };
        return output;
      });
      setLoading(false);
      Promise.all(pokemons).then((values) => {setData(values)});
    })();
  }, []);

  return { data, isLoading };
}
