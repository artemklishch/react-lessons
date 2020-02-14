import React from 'react';

const CartTitle = ({count, userName}) => 
  <div className="cart-title">
    {`${userName}, you added ${count} items`}
  </div>;
export default CartTitle;