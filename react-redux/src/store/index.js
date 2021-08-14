import { createStore, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (action.type === "INCREASE") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   } else if (action.type === "TOGGLE") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store =createStore(counterReducer)
