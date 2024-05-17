import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users.jsx";
import NewCustomer from "./customers/pages/NewCustomer.jsx";
import UserCustomers from "./customers/pages/UserCustomers.jsx";
import UpdateCustomer from "./customers/pages/UpdateCustomer.jsx";
import MainNavigation from "./shared/components/Navigation/MainNavigation.jsx";
import Auth from "./users/pages/Auth.jsx";

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
          <Route path="/customers/:customerId">
            <UpdateCustomer />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
