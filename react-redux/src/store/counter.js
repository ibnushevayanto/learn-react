import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = {
  counter: 0,
  showCounter: true,
};

// * Reducer

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    INCREASE(state, action) {
      state.counter += +action.payload || 0;
    },
    TOGGLE_COUNTER(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
