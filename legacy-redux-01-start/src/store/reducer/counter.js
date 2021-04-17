import * as actionsType from "../actions/actionsType";
import { updatedObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  /**
   * Tips : Dont Touch Old State !
   */
  switch (action.type) {
    case actionsType.INCREMENT:
      return updatedObject(state, { counter: state.counter + action.value });
    case actionsType.DECREMENT:
      return updatedObject(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default reducer;
