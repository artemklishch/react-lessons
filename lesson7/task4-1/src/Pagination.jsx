import React from 'react';


const Pagination = props => {
  const disabled2 = props.itemsPerPage < 3 || props.currentPage * 3 === props.totalItems
    ? true : false;
  
  const disabled1= props.currentPage === 1
    ? true : false;

  return (
    <div className="pagination" >
      <button
        className="btn prevBtn"
        onClick={props.goPrev}
        disabled={disabled1}
      >
        {disabled1 ? '' : '→'}
      </button>

      <span className="pagination__page">{props.currentPage}</span>

      <button
        className="btn nextBtn"
        onClick={props.goNext}
        disabled={disabled2}
      >
        {disabled2 ? '' : '→'}
      </button>
    </div>
  );
};
export default Pagination;