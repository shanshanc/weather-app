import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import sampleWeatherData from './private/weatherData';
import { OPEN_WEATHER_API_KEY } from './private/openWeatherAPI';

import CardList from './components/CardList';
import BreakdownList from './components/BreakdownList';
import './App.css';

const INITIAL_DATA = sampleWeatherData;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=1668341&units=metric&appid='

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  // a helper function to get today's date
  const getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = String(today.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
  }

  useEffect(() => {
    async function fetchData() {
      const today = getToday();

      axios
        .get(`${BASE_URL}${OPEN_WEATHER_API_KEY}`)
        .then(response => {
          const recordList = response.data.list;

          // loop over hourly record and aggregate daily data
          let daily = [];

          recordList.forEach(record => {
            const [currentDate, currentHour] = record.dt_txt.split(' ');
            const existingRecord = daily.find(function(element) {
              return element.date === currentDate;
            })

            if (!existingRecord) {
              daily.push({
                date: currentDate,
                minTemp: record.main.temp_min,
                maxTemp: record.main.temp_max,
                icon: record.weather[0].icon,
                alt: record.weather[0].main,
                records: [record],
                today: today
              })
            } else {
              // get daily min/max temperature, use mid-day icon for the forecast
              existingRecord.records.push(record);
              if (record.main.temp_min < existingRecord.minTemp) existingRecord.minTemp = record.main.temp_min;
              if (record.main.temp_max > existingRecord.maxTemp) existingRecord.maxTemp = record.main.temp_max;
              if (existingRecord.date !== today && currentHour === '12:00:00') {
                existingRecord.icon = record.weather[0].icon;
                existingRecord.alt = record.weather[0].main;
              };
            }

          });

          // append the daily records and update state
          response.data.daily = daily;
          console.log(response.data);
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
      <h2>5-day weather forecast - {data.city.name} (°C)</h2>
      
      <Switch>
        <Route exact path="/" render={() => <CardList dailyList={data.daily} />} />
        <Route path="/breakdown" render={() => <BreakdownList list={data.daily}/>} />
      </Switch>
    </div>
  );
}

export default App;
