import React from 'react';
import BreakdownCard from './BreakdownCard';

const BreakdownList = ({ list, city }) => {
  if (!list) return <div>updating...</div>;
  return (
    <div className="container">
      <div>
        <h2>3-hour weather and forecasts in {city.name}, {city.country} (°C)</h2>
      </div>
      <div className="breakdown-list">
      {list.map((data, index) => 
        <BreakdownCard 
          key={index}
          date={data.date}
          today={data.today}
          records={data.records}
        />
      )}
    </div>
    </div>
    
  )
}

export default BreakdownList;
