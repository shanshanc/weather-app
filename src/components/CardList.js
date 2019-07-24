import React from 'react';
import Card from './Card';

const CardList = ({dataList}) => (
  <div className="card-list">
    {dataList.map((data, index) => 
        <Card
          key={index}
          day_of_week={data.dt_txt}
          minTemp={data.main.temp_min}
          maxTemp={data.main.temp_max}
          weatherImage={data.weather[0].icon}
          weatherAlt={data.weather[0].main}
        />
      )}
  </div>
)

export default CardList;
