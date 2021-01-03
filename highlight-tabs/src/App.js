import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Tabs />
          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
