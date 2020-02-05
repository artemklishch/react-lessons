import React from 'react';
import Clock from './Clock';

let time = new Date();

const App = () => {
  return (
    <Clock location="London" offset={time.setDate(time.getHours()-2)} />
    <Clock location="Kyiv" offset={time} />
    <Clock location="New York" offset={time.setDate(time.getHours()-5)} />
  );
};
export default App;