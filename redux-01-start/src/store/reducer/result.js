import * as actionsType from "../actions";

const initialState = {
  counter: 0,
  dataStore: [],
};

const reducer = (state = initialState, action) => {
  /**
   * Tips : Dont Touch Old State !
   */
  switch (action.type) {
    case actionsType.STORE_DATA:
      return {
        ...state,
        dataStore: state.dataStore.concat(action.value),
      };
    case actionsType.REMOVE_DATA:
      return {
        ...state,
        dataStore: state.dataStore.filter(
          (...params) => params[1] !== action.index
        ),
      };
    default:
      return state;
  }
};

export default reducer;
