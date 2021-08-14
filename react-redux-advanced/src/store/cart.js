import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const initialState = {
  showCart: false,
  itemsCart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    TOGGLE_CART(state) {
      state.showCart = !state.showCart;
    },
    ADD_ITEMS(state, action) {
      if (state.itemsCart[action.payload]) {
        state.itemsCart[action.payload] += 1;
      } else {
        state.itemsCart[action.payload] = 1;
      }
    },
    REDUCE_ITEMS(state, action) {
      state.itemsCart[action.payload] -= 1;
      if (state.itemsCart[action.payload] === 0) {
        delete state.itemsCart[action.payload];
      }
    },
    SET_ITEMS_CART(state, action) {
      state.itemsCart = action.payload;
    },
  },
});

// * Action Creator Thunk
export const fetchCartData = () => {
  return async (dispatch) => {
    const reqFetchCartData = async () => {
      const response = await fetch(
        "https://nuxt-blog-6b95b.firebaseio.com/cart.json"
      );
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error("Fetch cart data failed");
      }
    };

    try {
      const response = await reqFetchCartData();
      if(response){
        dispatch(cartSlice.actions.SET_ITEMS_CART(response));
      }
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: "success",
          title: "Success",
          message: "Fetch cart data successfully!",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: "error",
          title: "Error",
          message: e,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.SHOW_NOTIFICATION({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const reqSendCartData = async () => {
      const response = await fetch(
        "https://nuxt-blog-6b95b.firebaseio.com/cart.json",
        {
          method: "put",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await reqSendCartData();
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: "success",
          title: "Success",
          message: "Send cart data successfully!",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: "error",
          title: "Error",
          message: e,
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
