import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart; //oprion 1
    // const {cart} = props; //option 2
    let totalPrice = 0, totalShiping = 0;
    for(const product of cart){
        totalPrice+= product.price;
        totalShiping+= product.shippping;
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + totalShiping;

    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <p>Selected Items: {cart.length}</p> 
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping: </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;