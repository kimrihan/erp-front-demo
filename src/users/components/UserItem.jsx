import "./UserItem.css";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card.jsx";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/customers`}>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.customerCount}{" "}
              {props.customerCount === 1 ? "Customer" : "Customers"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
