import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setVisibility] = useState(true);
  return (
    <>
      <button onClick={() => setVisibility(!isVisible)}>Toggle</button>
      <div className="clock">
        {
          isVisible
          &&
          <>
            <Clock location="New York" offset={-7} />
            <Clock location="Kyiv" offset={0} />
            <Clock location="London" offset={-2} />
          </>
        }
      </div>
    </>
  );
};
export default App;