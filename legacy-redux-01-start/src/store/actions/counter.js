import * as actionsType from "./actionsType";

export const increment = (value) => {
  return {
    type: actionsType.INCREMENT,
    value: value || 1,
  };
};

export const decrement = (value) => {
  return {
    type: actionsType.DECREMENT,
    value: value || 1,
  };
};


