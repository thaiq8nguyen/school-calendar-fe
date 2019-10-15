import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" /> {/* For a future landing page */}
          <Route path="/login" component={Login} />
          <Route path="/register" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
