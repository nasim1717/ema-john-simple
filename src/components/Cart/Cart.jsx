import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleClerCart, children }) => {
  // const cart = props.cart; //oprion 1
  // const {cart} = props; //option 2
  let totalPrice = 0,
    totalShiping = 0,
    quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    // product.quantity = product.quantity || 1;
    totalPrice += product.price * product.quantity;
    totalShiping += product.shipping;
    quantity += product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShiping;
  console.log(quantity);
  return (
    <div className="cart">
      <h4>Order Summary </h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shiping: </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClerCart} className="btn-clear-cart">
        <span> Clear Cart</span>
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Cart;
