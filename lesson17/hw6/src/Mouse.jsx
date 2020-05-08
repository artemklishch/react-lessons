import React, { useState, useEffect } from 'react'

const Mouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
    const logMousePosition = e => {
      console.log('Mouse event');
      setX(e.clientX);
      setY(e.clientY);
    };
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component unmounted');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks x - {x} y - {y}
    </div>
  )
}

export default Mouse
