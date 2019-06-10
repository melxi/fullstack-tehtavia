import React from "react";

const Weather = ({ currentWeather }) => {
  return (
    <div>
      <h2>Weather in {currentWeather.location.name}</h2>
      <p>
        <strong>temperature: </strong>
        {currentWeather.current.temp_c} Celsius
      </p>
      <img
        src={currentWeather.current.condition.icon}
        alt={currentWeather.current.condition.text}
      />
      <p>
        <strong>wind: </strong>
        {currentWeather.current.wind_kph} kph direction{" "}
        {currentWeather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
