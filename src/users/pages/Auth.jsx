import { useState } from "react";

import Card from "../../shared/components/UIElements/Card.jsx";
import Input from "../../shared/components/FormElements/Input.jsx";
import Button from "../../shared/components/FormElements/Button.jsx";

import { useForm } from "../../shared/hooks/form-hook.js";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";

import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          phone: undefined,
        },
        formState.inputs.name.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          phone: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? "로그인" : "회원가입"}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="name"
          type="text"
          label="이름"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="이름을 입력해주세요."
          onInput={inputHandler}
        />
        {!isLoginMode && (
          <Input
            element="input"
            id="phone"
            type="text"
            label="전화번호"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="전화번호를 입력해주세요."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="password"
          type="password"
          label="비밀번호"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="비밀번호를 입력해주세요."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "로그인" : "회원가입"}
        </Button>
        <Button inverse onClick={switchModeHandler}>
          {isLoginMode ? "회원가입" : "로그인"} 으로 이동하기
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
