import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    // using reducer to calculate total price of single person in cart
    const totalReducer = (previous, current) => previous + current.salary;
    const total = cart.reduce(totalReducer,0);

    return (
        <div className="cart">
            <h2>Persons Added : {props.cart.length}</h2>
            <h2>Total Cost : $ {total}</h2>
            {
                cart.map(details => {
                    return (
                        <div className="cart-details">
                            <img src={details.img} alt="" />
                            <h2>{details.name}</h2>
                        </div>
                    )
                })
            }
            <button className="buy-btn">Buy Now</button>
        </div>
    );
};

export default Cart;