import React, { useState, useEffect } from "react";
import WeatherCard from "./components/weatherCard/component";
import "./App.css";

function App() {
  const location = "Sydney,au";
  const [query, setQuery] = useState("London,gb");
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });
  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=48c4b0dbb36d5cbbc492875ccf6734aa`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      condition: resJSON.weather[0].main,
      city: resJSON.name,
      country: resJSON.sys.country,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);
  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default App;
