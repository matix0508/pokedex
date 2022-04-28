import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Pokemon } from "../types/Pokemon";
import { ResultApi } from "../types/ResultApi";
import { TypeApi } from "../types/TypeApi";

export interface PokemonState {
  value: Pokemon[];
  status: "idle" | "loading" | "failed";
}

const initialState: PokemonState = {
  value: [],
  status: "idle",
};

export const AddPokemons = createAsyncThunk(
  "counter/fetchCount",
  async (offset: number, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
      );

      // throw new Error("UPS")

      const resJson = await res.json();
      const pokemons: Pokemon[] = resJson.results.map(
        async (item: ResultApi) => {
          const pokemon = await fetch(item.url);
          const pokemonJson = await pokemon.json();
          const output: Pokemon = {
            name: item.name,
            type: pokemonJson.types.map((item: TypeApi) => item.type.name),
            sprite: pokemonJson.sprites.front_default,
            height: pokemonJson.height,
            weight: pokemonJson.weight,
          };
          return output;
        }
      );
      return Promise.all(pokemons).then((values) => values);
    } catch (err) {
      return rejectWithValue(new Error("Pokemon is dead"));
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(AddPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddPokemons.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = state.value.concat(action.payload);
      })
      .addCase(AddPokemons.rejected, (state, action) => {
        state.status = "failed"
      })
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export default pokemonSlice.reducer;
