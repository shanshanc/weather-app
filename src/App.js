import React, { useState, useEffect } from 'react';
import axios from 'axios';

import sampleWeatherData from './private/weatherData';
import { OPEN_WEATHER_API_KEY } from './private/openWeatherAPI';

import CardList from './components/CardList';
import './App.css';

const SAMPLE_DATA = sampleWeatherData
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=1668341&units=metric&appid='

function App() {
  const [data, setData] = useState(SAMPLE_DATA);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`${BASE_URL}${OPEN_WEATHER_API_KEY}`)
        .then(response => {
          console.log('response: ', response);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <h2>Weather App</h2>
      <div>
        <p>{data.city.name}</p>
      </div>
      <CardList dataList={data.list}/>
    </div>
  );
}

export default App;
