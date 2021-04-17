import * as actionsType from "../actions/actionsType";
import { updatedObject } from "../utility";

const initialState = {
  counter: 0,
  dataStore: [],
};

const deleteResult = (state, index) => {
  const dataStore = state.dataStore.filter(
    (...params) => params[1] !== index
  );
  return updatedObject(state, {
    dataStore,
  });
};

const reducer = (state = initialState, action) => {
  /**
   * Tips : Dont Touch Old State !
   */
  switch (action.type) {
    case actionsType.STORE_DATA:
      return updatedObject(state, {
        dataStore: state.dataStore.concat(action.value),
      });
    case actionsType.REMOVE_DATA:
      return deleteResult(state, action.index);
    default:
      return state;
  }
};

export default reducer;
