import React from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ countries, countryName }) => {
  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().indexOf(countryName.toLowerCase()) >= 0
  );

  if (filteredCountries.length === 1) {
    return filteredCountries.map(country => (
      <CountryInfo key={country.name} country={country} />
    ));
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches</p>;
  } else {
    return filteredCountries.map(country => (
      <p key={country.name}>{country.name}</p>
    ));
  }
};

export default Country;
