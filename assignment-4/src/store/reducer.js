import * as actionsType from "./actions";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_DATA:
      return {
        data: state.data.concat(action.value),
      };
    case actionsType.REMOVE_DATA:
      return {
        data: state.data.filter((...params) => params[1] !== action.index),
      };
    default:
      return state;
  }
};

export default reducer;
