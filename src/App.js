import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Button } from "@material-ui/core";

function App() {
  const [city, setCity] = useState("dublin");
  const [weather, setWeather] = useState({});
  const [userlocation, setUserLocation] = useState({
    lat: null,
    lon: null,
  });

  const databuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = [d.getDate()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  useEffect(function () {
    getUserlocation();
    getWeather();
  }, []);

  function getUserlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }

  function getWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=00fbd74878cddc562b62cd6c05bc3abe`
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${userlocation.lat}&lon=${userlocation.lon}&units=metric&appid=00fbd74878cddc562b62cd6c05bc3abe`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (dataUser) {
            setWeather(data);
            console.log(data);
            console.log(dataUser);
          });
        console.log(data);
        setWeather(data);
      });
  }

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            className="storm"
            type="text"
            className="search-bar"
            placeholder="Search..."
            input
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </div>
        {/*Button selector */}
        <div className="btn-lg">
          <Button color="#ffffff" onClick={getWeather}>
            Weather
          </Button>
        </div>

        {/* Location Box */}
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{databuilder(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{weather.main && weather.main.temp}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
      //{" "}
    </div>
  );
}

export default App;
