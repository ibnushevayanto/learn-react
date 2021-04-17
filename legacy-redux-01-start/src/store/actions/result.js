import * as actionsType from "./actionsType";

const saveData = (value) => {
  return {
    type: actionsType.STORE_DATA,
    value,
  };
};

export const storeData = (value) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const state = getState()
      // console.log(state.ctr.counter)
      dispatch(saveData(value));
    }, 2000);
  };
};

export const removeData = (index) => {
  return {
    type: actionsType.REMOVE_DATA,
    index,
  };
};
