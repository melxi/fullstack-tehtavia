import React, { useState, useEffect } from "react";
import Country from "./components/Country";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  const handleChange = event => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        find countries <input onChange={handleChange} value={countryName} />
      </div>
      <Country countries={countries} countryName={countryName} />
    </div>
  );
}

export default App;
