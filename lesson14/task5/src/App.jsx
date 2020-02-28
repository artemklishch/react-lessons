import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <div className="clock">
      <Clock location="New York" offset={-5} />
    </div>
  );
};
export default App;