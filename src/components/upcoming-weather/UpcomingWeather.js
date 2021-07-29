import React from "react";
//import WeatherIconsContainer from "../WeatherIcons/WeatherIconsContainer"

const UpcomingWeatherCard = props => {
  return props.fiveDayForecast.map((forecast, i) => {
    console.log(forecast);
  });
};

export default UpcomingWeatherCard;
  