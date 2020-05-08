import React, { useState } from 'react'
import Mouse from './Mouse';

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <Mouse />}
    </div>
  )
}

export default MouseContainer
