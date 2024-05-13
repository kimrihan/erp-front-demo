import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          직원 리스트
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/customers">고객 리스트</NavLink>
      </li>
      <li>
        <NavLink to="/customers/new">고객 등록</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTH</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
