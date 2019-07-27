import React from 'react';

const BreakdownList = ({ list }) => {
  if (!list) return <div>updating...</div>;
  return (
    <div className="breakdown-list">
      {list.map((data, index) => 
          <div key={index}>
            <div className="date-box">
              <h4>{data.date} {data.date === data.today? <span>Today</span> : <span></span>}</h4>
            </div>
            {data.records.map((record, i) =>
                <div key={i} className="breakdown-box">
                  <div className="box-temp">
                    <p>{record.dt_txt.split(' ')[1].substring(0,5)}</p>
                  </div>
                  {/* <div>{record.weather[0].icon}</div> */}
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
              )
            }
          </div>
          
        )}
    </div>
  )
}

export default BreakdownList;
