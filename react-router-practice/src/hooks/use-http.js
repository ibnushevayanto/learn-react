import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  } else if (action.type === "SUCCESS") {
    return {
      data: action.data,
      error: null,
      status: "completed",
    };
  } else if (action.type === "ERROR") {
    return { data: null, error: action.errorMessage, status: "completed" };
  }
  return state;
}

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (params) => {
      dispatchHttp({ type: "SEND" });
      try {
        const responseData = await requestFunction(params);
        dispatchHttp({ data: responseData, type: "SUCCESS" });
      } catch (e) {
        dispatchHttp({ type: "ERROR", errorMessage: e.message });
      }
    },
    [requestFunction]
  );

  return { ...httpState, sendRequest };
};

export default useHttp;
