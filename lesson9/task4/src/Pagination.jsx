import React from 'react';

const Filter = ({onChange,count}) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" onChange={onChange} />
    </div>
  );
};
export default Filter;