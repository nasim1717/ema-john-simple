import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFormCart = (id) => {
    // console.log(id);
    const remaing = cart.filter((product) => product.id !== id);
    setCart(remaing);
    removeFromDb(id);
  };

  const handleClerCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  //   console.log(cart);
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFormCart={handleRemoveFormCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-cotainer">
        <Cart cart={cart} handleClerCart={handleClerCart}>
          <Link className="porceed-link" to="/checkout">
            <button className="btn-proceed">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
