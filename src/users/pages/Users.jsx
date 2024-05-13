import UsersList from "../components/UsersList.jsx";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "ringo",
      customers: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
