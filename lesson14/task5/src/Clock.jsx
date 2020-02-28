import React from 'react';

const Clock = ({location, offset}) => {
  let localeTime = new Date().setHours(new Date().getHours() + offset);
  localeTime = new Date(localeTime); 
  return (
    <>
      <div className="clock__location">{location}</div>
  <div className="clock__time">{localeTime}</div>
    </>
  );
};
export default Clock;