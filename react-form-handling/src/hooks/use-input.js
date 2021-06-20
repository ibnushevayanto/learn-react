import { useReducer } from "react";

const reducerInput = (state, dispatch) => {
  switch (dispatch.action) {
    case "INPUT":
      return { ...state, value: dispatch.value };
    case "TOUCH":
      return { ...state, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return state;
  }
};

const useInput = (validation) => {
  const [Input, dispatchInput] = useReducer(reducerInput, {
    value: "",
    isTouched: false,
  });
  const isInputValid = validation(Input.value);
  const isInputError = isInputValid && Input.isTouched;

  const changeHandler = (e) => {
    dispatchInput({ action: "INPUT", value: e.target.value });
  };

  const touchHandler = () => {
    dispatchInput({ action: "TOUCH" });
  };

  const reset = () => {
    dispatchInput({ action: "RESET" });
  };

  return {
    value: Input.value,
    isTouched: Input.isTouched,
    isInputValid,
    isInputError,
    changeHandler,
    touchHandler,
    reset,
  };
};

export default useInput;
