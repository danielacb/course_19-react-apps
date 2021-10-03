import React, { useState, useEffect, useCallback } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

export default function GeoForm({ setLatLng }) {
  const [value, setValue] = useState("Goiânia");

  const getLatLng = useCallback(
    (address) => {
      Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setLatLng({ lat, lng });
      });
    },
    [setLatLng]
  );

  useEffect(() => {
    getLatLng("Goiânia");
  }, [getLatLng]);

  function handleSubmit(e) {
    e.preventDefault();
    getLatLng(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
