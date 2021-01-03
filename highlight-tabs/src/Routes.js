import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

export default function Routes() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
