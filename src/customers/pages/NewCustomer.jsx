import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators.js";
import "./NewCustomer.css";

const NewCustomer = () => {
  return (
    <form className="customer-form">
      <Input
        element="input"
        type="text"
        label="고객명"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="입력이 바르지 않습니다."
      />
    </form>
  );
};

export default NewCustomer;
