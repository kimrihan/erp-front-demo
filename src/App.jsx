import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users.jsx";
import NewCustomer from "./customers/pages/NewCustomer.jsx";
import MainNavigation from "./shared/components/Navigation/MainNavigation.jsx";
import UserCustomers from "./customers/pages/UserCustomers.jsx";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/customers" exact>
            <UserCustomers />
          </Route>
          <Route path="/customers/new" exact>
            <NewCustomer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
