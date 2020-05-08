import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component{
  state = {
    products: [
      {
        id: 2,
        name: 'iPad Pro',
        price: 799
      },
      {
        id: 1,
        name: 'iPhone 111',
        price: 999
      },
    ]
  };
  render(){
    return (
      <div className="column">
        <CartTitle
          count={this.state.products.length}
          userName={this.props.userName}
        />
        <ProductsList
          cartItems={this.state.products}
        />
      </div>
    );
  }
};
export default ShoppingCart;