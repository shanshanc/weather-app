import React from 'react';

const CardList = ({ dailyList, city }) => {
  if (!dailyList) return <div>updating...</div>;
  return (
    <div className="container">
      <div>
        <h2>Daily weather and forecasts in {city.name}, {city.country} (°C)</h2>
      </div>
      <div className="card-list">
      {dailyList.map((data, index) => 
        <div key={index} className="card">
          <div>{data.date}</div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${data.icon.slice(0, 2)}d@2x.png`} alt={data.alt}/>
          </div>
          <div className="card-temp">
            <span>{parseInt(data.minTemp)}</span>
            {' - '} 
            <span>{parseInt(data.maxTemp)}</span>
          </div>
        </div>
        )}
        </div>
    </div>
  )
}

export default CardList;
