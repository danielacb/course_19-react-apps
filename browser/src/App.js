import React, { useState } from "react";
import Tabs from "./components/Tabs";
import AddressBar from "./components/AddressBar";
import "./App.css";

export default function App() {
  const [browsers, setBrowsers] = useState([
    "https://danielacb.com/",
    "https://makereactapps.com/",
  ]);
  const [activeBrowser, setActiveBrowser] = useState(0);

  const url = browsers[activeBrowser];

  return (
    <div className="app">
      <div className="browser">
        <Tabs browsers={browsers} active={activeBrowser} />

        <AddressBar />

        <div className="viewport">
          {url ? (
            <iframe src={url} frameborder="0" title="viewport" />
          ) : (
            <>Open a new Tab!</>
          )}
        </div>
      </div>
    </div>
  );
}
