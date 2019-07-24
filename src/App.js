import React, { useState } from 'react';
import './App.css';
import sampleWeatherData from './private/weatherData';
import CardList from './components/CardList';

const SAMPLE_DATA = sampleWeatherData

function App() {
  const [data] = useState(SAMPLE_DATA);
  
  return (
    <div className="App">
      <h2>Weather App</h2>
      <CardList dataList={data.list}/>
    </div>
  );
}

export default App;
