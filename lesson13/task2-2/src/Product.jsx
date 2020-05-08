import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return (
  <div className="product">{productId}</div>
  );
};
export default Product;