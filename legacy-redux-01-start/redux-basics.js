const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  const dataState = {
    ...state,
  };
  if (action.type === "INC_COUNTER") {
    dataState.counter += 1;
  } else if (action.type === "ADD_COUNTER") {
    dataState.counter += action.value;
  }
  return dataState;
};

// Store
const store = createStore(reducer);

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
