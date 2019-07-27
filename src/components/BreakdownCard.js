import React from 'react';

const Card = ({day_of_week, hour_of_day, minTemp, maxTemp, weatherImage, weatherAlt}) => (
  <div className="card">
    <div>{day_of_week}</div>
    <div>{hour_of_day}</div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${weatherImage}@2x.png`} alt={weatherAlt}/>
    </div>
    <div className="card-temp">
      <span>{parseInt(minTemp)}</span>
      {' - '} 
      <span>{parseInt(maxTemp)}</span>
    </div>
  </div>
)

export default Card;
