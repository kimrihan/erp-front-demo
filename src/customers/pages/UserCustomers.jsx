import { useParams } from "react-router-dom";

import CustomerList from "../components/CustomerList";
const DUMMY_CUSTOMER = [
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

const UserCustomers = () => {
  const userId = useParams().userId;
  const loadedCustomers = DUMMY_CUSTOMER.filter(
    (customer) => customer.creator === userId
  );
  return <CustomerList items={loadedCustomers} />;
};

export default UserCustomers;
