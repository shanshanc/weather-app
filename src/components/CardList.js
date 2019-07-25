import React from 'react';
import Card from './Card';

const CardList = ({ dailyList }) => {
  if (!dailyList) return <div>updating...</div>;
  return (
    <div className="card-list">
      {dailyList.map((data, index) => 
          <Card
            key={index}
            day_of_week={data.date}
            minTemp={data.minTemp}
            maxTemp={data.maxTemp}
            weatherImage={data.icon.slice(0, 2)}
            weatherAlt={data.alt}
          />
        )}
    </div>
  )
}

export default CardList;
