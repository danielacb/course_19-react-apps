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

  function chooseBrowser(id) {
    setActiveBrowser(id);
  }

  function addBrowser() {
    const newBrowsers = [...browsers, ""];
    setBrowsers(newBrowsers);
    setActiveBrowser(newBrowsers.length - 1);
  }

  function updateBrowser(url) {
    const newBrowsers = [...browsers];
    newBrowsers[activeBrowser] = url;
    setBrowsers(newBrowsers);
  }

  const url = browsers[activeBrowser];

  return (
    <div className="app">
      <div className="browser">
        <Tabs
          browsers={browsers}
          active={activeBrowser}
          choose={chooseBrowser}
          add={addBrowser}
        />

        <AddressBar update={updateBrowser} url={url} />

        <div className="viewport">
          {url ? (
            <iframe src={url} frameBorder="0" title="viewport" />
          ) : (
            <>Brand new Tab!</>
          )}
        </div>
      </div>
    </div>
  );
}
