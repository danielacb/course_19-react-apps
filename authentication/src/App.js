import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";
import createAuth0Client from "@auth0/auth0-spa-js";

export default function App() {
  useEffect(() => {
    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: "dev-6bs0bzzi.us.auth0.com",
        client_id: "CHcsXfvGjpNXvzL2W6hwz3AoIrwNATv3",
      });

      const isAuthenticated = await auth0.isAuthenticated();
      const user = await auth0.getUser();
    }

    initAuth0();
  }, []);

  return (
    <Router>
      <div className="app">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
