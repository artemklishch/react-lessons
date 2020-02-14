import React, { Component } from 'react';

class ProductsList extends Component{
  state = {
    total: null
  };
  componentDidMount(){
    this.getAllSumOfGoods(this.props.cartItems);
  }
  getAllSumOfGoods = cartItems => {
    const sum = cartItems.reduce((acc, good) => acc += good.price, 0);
    this.setState({
      total: sum
    });
  }
  render(){
    if(!this.state.total) return null;
    const cartItems = this.props.cartItems;
    return (
      <div className="products">
        <ul className="products__list">
        {
          cartItems.map(product => 
            (
              <li className="products__list-item" key={product.id}>
                <span className="products__item-name">{product.name}</span>
                <span className="products__item-price">{`$${product.price}`}</span>
              </li>
            ))
        }
        </ul>
        <div className="products__total">{`Total: $${this.state.total}`}</div>
      </div>
    );
  }
};
export default ProductsList;