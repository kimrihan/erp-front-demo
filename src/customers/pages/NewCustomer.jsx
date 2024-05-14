import { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input.jsx";
import Button from "../../shared/components/FormElements/Button.jsx";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";
import "./NewCustomer.css";

const formReducer = (state, action) => {
  let formIsValid;
  switch (action.type) {
    case "INPUT_CHANGE":
      formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};
const NewCustomer = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      identification_number: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <form className="customer-form">
      <Input
        id="name"
        element="input"
        type="text"
        label="고객명"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="입력이 바르지 않습니다."
        onInput={inputHandler}
      />
      <Input
        id="identification_number"
        element="input"
        type="text"
        label="주민번호"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="입력이 바르지 않습니다."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        고객 등록
      </Button>
    </form>
  );
};

export default NewCustomer;
