import React from 'react';
import BreakdownCard from './BreakdownCard';

const BreakdownList = ({ list }) => {
  if (!list) return <div>updating...</div>;
  return (
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
  )
}

export default BreakdownList;
