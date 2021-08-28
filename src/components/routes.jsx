import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LocalContainer from "./local/localContainer";
import NationContainer from "./nation/nationContainer";
import Nav from "./nav/nav";

const Routes = ({ data }) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <LocalContainer data={data} />
        </Route>
        <Route path="/maker">
          <NationContainer data={data} />
        </Route>
      </Switch>
      <Nav />
    </HashRouter>
  );
};

export default Routes;
