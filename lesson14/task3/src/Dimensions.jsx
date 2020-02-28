import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [windowSizes, setWindowSizes] = useState({
    width: null,
    height: null
  }); 
  useEffect(() => {
    const handleSizes = () => {
      const { innerWidth, innerHeight } = window;
      setWindowSizes({ width:innerWidth, height:innerHeight });
    };
    window.addEventListener('resize', handleSizes);

    return () => {
      window.removeEventListener('resize', handleSizes);
    };
  }, [windowSizes]);
  return <div className="dimensions">{`${innerWidth}px - ${innerHeight}px`}</div>;
};
export default Dimensions;