import React from 'react';

const BreakdownCard = ({date, today, records}) => (
  <div className="card">
    <div className="date-box">
      <h4>{date} {date === today? <span>Today</span> : <span></span>}</h4>
    </div>
    {records.map((record, i) =>
        <div key={i} className="breakdown-box">
          <div className="box-temp">
            <p>{record.dt_txt.split(' ')[1].substring(0,5)}</p>
          </div>
          <div className="box-image">
            <img src={`http://openweathermap.org/img/wn/${record.weather[0].icon}@2x.png`} alt={record.weather[0].main}/>
          </div>
          <div className="box-detail">
            <div>
              <span className="round">{record.main.temp}°C</span>
              <span>{record.weather[0].description}</span>
            </div>
            <div>
              <span>Cloud: {record.clouds.all}%,</span>
              <span>Humidity: {record.main.humidity}%,</span>
              <span>Wind: {record.wind.speed} meter/sec</span>
            </div>
          </div>
        </div>
    )}
  </div>
)

export default BreakdownCard;
