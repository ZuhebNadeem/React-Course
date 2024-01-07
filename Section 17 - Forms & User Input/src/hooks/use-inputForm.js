import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  return initialState;
};

const useInputForm = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const validation = validateValue(inputState.value);
  const isInvalid = !validation && inputState.isTouched;

  const onChange = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlur = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valid: validation,
    hasError: isInvalid,
    onChange,
    onBlur,
    reset,
  };
};

export default useInputForm;
