import React, { useState, useEffect } from "react";
import Country from "./components/Country";
import Weather from "./components/Weather";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const getWeather = countryName => {
    axios
      .get(
        `http://api.apixu.com/v1/current.json?key=0a1b3266de3043f7985165041191006&q=${countryName}`
      )
      .then(response => {
        setCurrentWeather(response.data);
      });
  };

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
        getWeather={getWeather}
        handleClick={handleClick}
      />
      {currentWeather && countryName.length > 0 && (
        <Weather currentWeather={currentWeather} />
      )}
    </div>
  );
}

export default App;
