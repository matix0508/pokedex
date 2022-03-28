import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import darkModeSlice from '../features/darkModeSlice';
import pokemonSlice from '../features/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: pokemonSlice,
    darkMode: darkModeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
