import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Pokemon } from "../types/Pokemon";
import { z } from "zod";

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

      const resJson = await res.json();
      const schema = z
        .object({
          results: z
            .object({
              name: z.string(),
              url: z.string(),
            })
            .array(),
        })
        .transform(({ results }) => results);
      const validatedResponse = schema.parse(resJson);
      const pokemons = validatedResponse.map(async (item) => {
        const pokemon = await fetch(item.url);
        const pokemonJson = await pokemon.json();
        const schema = z.object({
          types: z.array(
            z.object({
              slot: z.number(),
              type: z.object({ name: z.string(), url: z.string() }),
            })
          ),
          sprites: z.object({
            front_default: z.string(),
          }),
          height: z.number().optional(),
          weight: z.number().optional(),
        });
        const validatedPokemon = schema.parse(pokemonJson);
        const output: Pokemon = {
          name: item.name,
          type: validatedPokemon.types.map(({ type }) => type.name),
          sprite: validatedPokemon.sprites.front_default,
          height: validatedPokemon.height,
          weight: validatedPokemon.weight,
        };
        return output;
      });
      return Promise.all(pokemons);
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
      .addCase(AddPokemons.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export default pokemonSlice.reducer;
