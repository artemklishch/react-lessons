import React from 'react';
import User from './User';


const Filter = ({ count, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" onChange={onChange} />
    </div>
  );
};
export default Filter;