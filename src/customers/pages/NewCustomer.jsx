import Input from "../../shared/components/FormElements/Input.jsx";
import Button from "../../shared/components/FormElements/Button.jsx";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook.js";

import "./CustomerForm.css";

const NewCustomer = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      identification_number: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const customerSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="customer-form" onSubmit={customerSubmitHandler}>
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
