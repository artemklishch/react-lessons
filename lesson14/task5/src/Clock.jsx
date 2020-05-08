import React from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => { clearInterval(interval) };
  }, [currentTime]);
  let localeTime = currentTime.setHours(currentTime.getHours() + offset);
  localeTime = new Date(localeTime);
  return (
    <div className="clock__block">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{moment(localeTime).format('LTS')}</div>
    </div>
  );
};
export default Clock;