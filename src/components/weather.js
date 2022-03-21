import React from "react";
import "./weather.css";

function Weather({ data }) {
  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>
          {data.name} ({data.sys.country})
        </h2>
        <button type="button">
          <i className="fa fa-refresh fa-2x fa-spin"></i>
        </button>
      </div>
      <div className="weather-body">
        <h5>Humidity : {data.main.humidity}</h5>
        <h5>Pressure : {data.main.pressure}</h5>
        <h5>Temperature : {data.main.temp}</h5>
        <h5>Description : {data.weather[0].description}</h5>
      </div>
    </div>
  );
}

export default Weather;
