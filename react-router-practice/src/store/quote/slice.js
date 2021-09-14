import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    SET_ITEMS(state, action) {
      state.items = action.payload;
    },
  },
});

export const quotesAction = quotesSlice.actions;
export default quotesSlice.reducer;
