import React from 'react';

const Product = ({match}) => {
  console.log(match);
  const product = match.path;
  return (
  <div className="product">{product}</div>
  );
};
export default Product;