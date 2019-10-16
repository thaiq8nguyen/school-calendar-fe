import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import AdminLogin from "./components/AdminLogin";
import StudentRegister from "./components/StudentRegister";
import AdminRegister from "./components/AdminRegister";
import AdminDashboard from "./components/AdminDashboard";
import AdminAddEvent from './components/AdminDashboard/AdminAddEvent';

import PrivateRoute from "./routes/privateRoute";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/StudentRegister" component={StudentRegister} />
          <Route path="/AdminRegister" component={AdminRegister} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route to='/add-event' component={AdminAddEvent} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
