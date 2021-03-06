import React, { useEffect } from "react";

const CountryInfo = ({ country, getWeather }) => {
  useEffect(() => {
    getWeather(country.name);
  });

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`${country.name} flag`} />
    </>
  );
};

export default CountryInfo;
