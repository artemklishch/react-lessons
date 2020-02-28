import React, { useState, useEffect } from 'react';

const Dimension = () => {
  const { innerWidth, innerHeight } = window;
  const [windowSizes, setWindowSizez] = useState({
    innerWidth,
    innerHeight
  }); 
  useEffect(() => {
    const handleSizes = () => {
      const { innerWidth, innerHeight } = window;
      setWindowSizez({ innerWidth, innerHeight });
    };
    window.addEventListener('resize', handleSizes);

    return () => {
      window.removeEventListener('resize', handleSizes);
    };
  }, [windowSizes]);
  return <div className="dimensions">{`${innerWidth} - ${innerHeight}`}</div>;
};
export default Dimension;