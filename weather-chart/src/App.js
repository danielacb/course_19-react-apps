import React, { useState } from "react";
import GeoForm from "./components/Geoform";
import WeatherChart from "./components/WeatherChart";

import "./App.css";

export default function App() {
  const [latLng, setLatLng] = useState(null);
  return (
    <div className="app">
      <GeoForm setLatLng={setLatLng} />

      {latLng && <WeatherChart latLng={latLng} />}
    </div>
  );
}
