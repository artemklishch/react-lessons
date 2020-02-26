import React from 'react';

const Product = ({match}) => {
  const product = match.params.productId;
  return (
  <div className="product">{product}</div>
  );
};
export default Product;