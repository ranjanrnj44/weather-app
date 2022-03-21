import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//components
import Weather from "./components/weather";

let api = {
  key: "89499c6c5e65e7418b1131afa802ad09",
  url: "https://api.openweathermap.org/data/2.5",
};

function App() {
  //get latitude and longitude
  let [lati, setLati] = useState([]);
  let [longi, setLongi] = useState([]);

  let [data, setData] = useState([]);

  //get new result when our app loads and reloads based on dependency (lati, longi)
  useEffect(() => {
    let fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLati(position.coords.latitude);
        setLongi(position.coords.longitude);
      });

      await axios
        .get(`${api.url}/weather/?lat=${lati}&lon=${longi}&appid=${api.key}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
      console.log(lati);
      console.log(longi);
    };
    //call our function
    fetchData();
  }, [lati, longi]);

  //fetch using AXIOS - the current location based on out latitude and longitude;

  return (
    <div className="App">
      <h1>Weather App - By geographic coordinates</h1>
      <br />

      {/* conditions for getting data */}
      {data.main === "undefined" ? (
        <p>No Data Found</p>
      ) : (
        <Weather data={data} />
      )}
    </div>
  );
}

export default App;
