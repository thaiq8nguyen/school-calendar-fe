import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" /> {/* For a future landing page */}
          <Route path="/login" />
          <Route path="/register" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
