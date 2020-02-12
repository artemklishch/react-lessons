import React, { Component } from 'react';

class Pagination extends Component{
  constructor(props){
    super(props);
  }
  getSubarray = (pos, array) => {
    let subArray;
    if(pos > array.length){
      const numOfThreeSubArrs = Math.trunc(array.length/3); 
      const restNumber = array.length - (numOfThreeSubArrs * 3);
      return array.slice(0, pos).slice(-restNumber);
    }
    const arr = array.slice(0, pos);
    if(arr.length < array.length){
      subArray = arr.slice(-3);
    }else{
      const difference = Math.abs(array.length - arr.length);
      subArray = arr.slice(-difference);
    }
    return subArray;
  }
    // let disabled1, disabled2, prevArrow, nextArrow, markForLength;
    // markForLength = props.totalItems % 3 === 0 
    //   ? props.totalItems / 3 
    //   : null;
    // if(props.currentPage === 1){
    //   disabled1 = true;
    //   prevArrow = '';
    // }else{
    //   disabled1 = false;
    //   prevArrow = '←';
    // }
    // if(props.itemsPerPage < 3){
    //   disabled2 = true;
    //   nextArrow = '';
    // }else{
    //   disabled2 = false;
    //   nextArrow = '→';
    // }
    // if(markForLength === props.currentPage){
    //   disabled2 = true;
    //   nextArrow = '';
    // }
  
    render(){
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
    }

    
};
export default Pagination;