import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import AdminLogin from "./components/AdminLogin";
import StudentRegister from "./components/StudentRegister";
import AdminRegister from "./components/AdminRegister";
import Login from "./components/Login/index";

import AdminDashboard from "./components/AdminDashboard";
import PrivateRoute from "./routes/privateRoute";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/StudentLogin" component={Login} />
          <Route path="/StudentRegister" component={StudentRegister} />
          <Route path="/AdminRegister" component={AdminRegister} />
          <PrivateRoute path="/AdminDashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
