import Card from "../../shared/components/UIElements/Card.jsx";
import CustomerItem from "./CustomerItem.jsx";

import "./CustomerList.css";
const CustomerList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="customer-list center">
        <Card>
          <h2>고객이 없습니다. 고객을 등록 하시겠습니까?</h2>
          <button>share place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="customer-list">
      {props.items.map((customer) => (
        <CustomerItem
          key={customer.id}
          id={customer.id}
          name={customer.name}
          identification_number={customer.identification_number}
          phone={customer.phone}
          creatorId={customer.creator}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
