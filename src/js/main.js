import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Employees from "../pages/employees";
import Room from "../pages/rooms";
import Procedures from "../pages/scenarios";
import Directory from "../pages/directory";
import NotFound from "../pages/notFound";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/employees" component={Employees} />
    <Route path="/room" component={Room} />
    <Route path="/scenarios" component={Procedures} />
    <Route path="/directory" component={Directory} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Main;
