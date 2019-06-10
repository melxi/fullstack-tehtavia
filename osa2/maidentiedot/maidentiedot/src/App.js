import React, { useState, useEffect } from "react";
import Country from "./components/Country";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = event => {
    setCountryName(event.target.value);
  };

  const handleClick = event => {
    const name = event.target.id;
    setCountryName(name);
  };

  return (
    <div>
      <div>
        find countries <input onChange={handleChange} value={countryName} />
      </div>
      <Country
        countries={countries}
        countryName={countryName}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
