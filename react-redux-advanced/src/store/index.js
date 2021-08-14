import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart";
import ProductReducer from "./product";
import UIReducer from "./ui";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
    ui: UIReducer,
  },
});

export default store;
