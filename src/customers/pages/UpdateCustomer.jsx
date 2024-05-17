import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input.jsx";
import Button from "../../shared/components/FormElements/Button.jsx";
import Card from "../../shared/components/UIElements/Card.jsx";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook.js";
import "./CustomerForm.css";

const DUMMY_CUSTOMERS = [
  {
    id: "c1",
    name: "kim",
    identification_number: "901011-1231212",
    phone: "010-1111-1111",
    company: "Acompany",
    creator: "u1",
  },
  {
    id: "c2",
    name: "park",
    identification_number: "831212-2131212",
    phone: "010-2222-2222",
    company: "Bcompany",
    creator: "u2",
  },
];

const UpdateCustomer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const customerId = useParams().customerId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      identification_number: {
        valud: "",
        isValid: false,
      },
    },
    true
  );

  const identifiedCustomer = DUMMY_CUSTOMERS.find((c) => c.id === customerId);

  useEffect(() => {
    if (identifiedCustomer) {
      setFormData(
        {
          name: {
            value: identifiedCustomer.name,
            isValid: true,
          },
          identification_number: {
            value: identifiedCustomer.identification_number,
            isValid: true,
          },
        },
        false
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedCustomer]);

  const customerUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedCustomer) {
    return (
      <div className="center">
        <Card>
          <h2>해당 고객을 찾을 수 없습니다.</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>로딩 중...</h2>
      </div>
    );
  }
  return (
    <form className="customer-form" onSubmit={customerUpdateSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="고객명"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="유효한 값을 입력하세요."
        onInput={inputHandler}
        initialValue={formState.inputs.name.value}
        initialValid={formState.inputs.name.isValid}
      />
      <Input
        id="identification_number"
        element="input"
        type="text"
        label="주민번호"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="유효한 값을 입력하세요."
        onInput={inputHandler}
        initialValue={formState.inputs.identification_number.value}
        initialValid={formState.inputs.identification_number.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        저장하기
      </Button>
    </form>
  );
};

export default UpdateCustomer;
