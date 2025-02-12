import { createSlice } from "@reduxjs/toolkit";

const searchTabSlice = createSlice({
  name: "search",
  initialState: {
    searchTabOpen: false, // Initial state
  },
  reducers: {
    openSearchTab: (state) => {
        state.searchTabOpen = true;
      },
      closeSearchTab: (state) => {
        state.searchTabOpen = false;
      },
      toggleSearchTab: (state) => {
        state.searchTabOpen = !state.searchTabOpen;
      },
  },
});

export const { openSearchTab, closeSearchTab, toggleSearchTab } = searchTabSlice.actions;
export default searchTabSlice.reducer;
