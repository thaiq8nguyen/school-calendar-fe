import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import StudentRegister from './components/StudentRegister'
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" /> {/* For a future landing page */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={StudentRegister}/>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
