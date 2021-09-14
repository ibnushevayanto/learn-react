import { configureStore } from "@reduxjs/toolkit";
import QuoteReducer from "./quote/slice";

const store = configureStore({
  reducer: {
    quote: QuoteReducer,
  },
});

export default store;
