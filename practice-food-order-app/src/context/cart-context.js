import React, { useReducer, useCallback } from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  const indexItem = state.items.findIndex((res) => res.id === action.item.id);
  if (action.type === "ADD_ITEM") {
    const items = [...state.items];
    if (indexItem >= 0) {
      items[indexItem].amount += +action.item.amount;
    } else {
      items.push(action.item);
    }
    const totalAmount =
      state.totalAmount + +action.item.price * +action.item.amount;
    return { items, totalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    const items = [...state.items];
    const totalAmount = +state.totalAmount - +action.item.price;

    if (items[indexItem].amount === 1) {
      items.splice(indexItem, 1);
    } else {
      items[indexItem].amount -= 1;
    }

    return { items, totalAmount };
  } else {
    return state;
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = useCallback((item) => {
    dispatchCartState({ type: "ADD_ITEM", item });
  }, []);
  const removeItemHandler = useCallback((item) => {
    dispatchCartState({ type: "REMOVE_ITEM", item });
  }, []);

  const valueContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <cartContext.Provider value={valueContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
