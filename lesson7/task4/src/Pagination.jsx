import React from 'react';

const Pagination = props => {
  return (
    <div className="pagination" >
      <button 
        className="btn prevBtn"
        onClick={props.goPrev}
        disabled={props.disabled1}
      >
          {props.prevArrow}
      </button>

      <span className="pagination__page">{props.currentPage}</span>

      <button 
        className="btn nextBtn"
        onClick={props.goNext}
        disabled={props.disabled2}
      >
        {props.nextArrow}
      </button>
    </div>
  );
};
export default Pagination;