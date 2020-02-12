import React from 'react';


const Pagination = props => {
  let disabled1, disabled2, prevArrow, nextArrow;
  const mark = props.currentPage * 3;
  if (props.itemsPerPage < 3 || mark === props.totalItems) {
    disabled2 = true;
    nextArrow = '';
  } else {
    disabled2 = false;
    nextArrow = '→';
  }
  if (props.currentPage === 1) {
    disabled1 = true;
    prevArrow = '';
  } else {
    disabled1 = false;
    prevArrow = '←';
  }


  return (
    <div className="pagination" >
      <button
        className="btn prevBtn"
        onClick={props.goPrev}
        disabled={disabled1}
      >
        {prevArrow}
      </button>

      <span className="pagination__page">{props.currentPage}</span>

      <button
        className="btn nextBtn"
        onClick={props.goNext}
        disabled={disabled2}
      >
        {nextArrow}
      </button>
    </div>
  );
};
export default Pagination;