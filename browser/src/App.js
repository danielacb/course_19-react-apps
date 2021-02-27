import React, { useReducer } from "react";
import Tabs from "./components/Tabs";
import AddressBar from "./components/AddressBar";
import "./App.css";

export default function App() {
  function reducer(state, action) {
    const { browsers, activeBrowser } = state;
    const { type, payload } = action;

    if (type === "ADD") {
      const newBrowsers = [...browsers, ""];
      const activeBrowser = newBrowsers.length - 1;
      return {
        browsers: newBrowsers,
        activeBrowser,
      };
    }
    if (type === "CHOOSE") {
      return {
        ...state,
        activeBrowser: payload,
      };
    }
    if (type === "UPDATE") {
      const newBrowsers = [...browsers];
      newBrowsers[activeBrowser] = payload;
      return {
        ...state,
        browsers: newBrowsers,
      };
    }
    if (type === "CLOSE") {
    }
  }

  const [{ browsers, activeBrowser }, dispatch] = useReducer(reducer, {
    browsers: ["https://danielacb.com/", "https://makereactapps.com/"],
    activeBrowser: 0,
  });

  const chooseBrowser = (id) => dispatch({ type: "CHOOSE", payload: id });
  const addBrowser = () => dispatch({ type: "ADD" });
  const updateBrowser = (url) => dispatch({ type: "UPDATE", payload: url });

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
