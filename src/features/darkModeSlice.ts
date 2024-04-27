import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: true,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
