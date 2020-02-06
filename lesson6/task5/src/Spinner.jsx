import React from 'react';

const Spinner = props => {
  return (
    <span 
      className="spinner"
      style={{width:props.size + 'px', height:props.size + 'px'}}
    >
    </span>
  );
};
export default Spinner;