import React from 'react';

const Title = () => {
  console.log('Rendering title');
  return <h2>
    useCallbackHook
  </h2>
};
export default React.memo(Title);