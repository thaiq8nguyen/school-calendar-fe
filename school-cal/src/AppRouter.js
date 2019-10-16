import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import AdminLogin from "./components/AdminLogin";
import StudentRegister from "./components/StudentRegister";
import AdminRegister from "./components/AdminRegister";
import AdminDashboard from "./components/AdminDashboard";
import PrivateRoute from "./routes/PrivateRoute";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/admin-signin" component={AdminLogin} />
          <Route path="/student-register" component={StudentRegister} />
          <Route path="/admin-register" component={AdminRegister} />
          <PrivateRoute path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
