import React from 'react';

const Pagination = (props) => {
    let disabled1, disabled2, prevArrow, nextArrow, markForLength;
    markForLength = props.totalItems % 3 === 0 
      ? props.totalItems / 3 
      : null;
    if(props.currentPage === 1){
      disabled1 = true;
      prevArrow = '';
    }else{
      disabled1 = false;
      prevArrow = '←';
    }
    if(props.itemsPerPage < 3){
      disabled2 = true;
      nextArrow = '';
    }else{
      disabled2 = false;
      nextArrow = '→';
    }
    if(markForLength === props.currentPage){
      disabled2 = true;
      nextArrow = '';
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