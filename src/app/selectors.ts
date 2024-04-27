import { RootState } from "./store";

export const darkModeSelector = (state: RootState) => state.darkMode.dark;
