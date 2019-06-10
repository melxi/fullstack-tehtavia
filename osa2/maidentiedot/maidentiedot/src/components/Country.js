import React from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ countries, countryName, getWeather, handleClick }) => {
  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().indexOf(countryName.toLowerCase()) >= 0
  );

  if (filteredCountries.length === 1) {
    return filteredCountries.map(country => (
      <CountryInfo
        key={country.name}
        country={country}
        getWeather={getWeather}
      />
    ));
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches</p>;
  } else {
    return filteredCountries.map(country => (
      <p key={country.name}>
        {country.name}{" "}
        <button id={country.name} onClick={handleClick}>
          show
        </button>
      </p>
    ));
  }
};

export default Country;
