import React from 'react';

const Pagination = props => {
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');
  if(props.currentPage === 0){
    prevBtn.setAttribute()
  }
  console.log(props.currentPage);
  return (
    <div className="pagination">
      <button className="btn prevBtn" onClick={props.goPrev}>←</button>
      <span className="pagination__page">{props.currentPage}</span>
      <button className="btn nextBtn" onClick={props.goNext}>→</button>
    </div>
  );
};
export default Pagination;