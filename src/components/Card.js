import React from 'react';

const Card = ({day_of_week, minTemp, maxTemp, weatherImage, weatherAlt}) => (
  <div className="card">
    <div>{day_of_week}</div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${weatherImage}d@2x.png`} alt={weatherAlt}/>
    </div>
    <div className="card-temp">
      <span>{parseInt(minTemp)}</span>
      {' - '} 
      <span>{parseInt(maxTemp)}</span>
    </div>
  </div>
)

export default Card;
