import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./store/reducer/counter";
import resultReducer from "./store/reducer/result";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const middleware = (store) => (next) => (action) => {
  console.log("[Middleware] actions", action);
  const result = next(action);
  console.log("[Middleware] store", store.getState());
  return result;
};

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(middleware, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
