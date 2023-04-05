import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const { img, name, seller, ratings, quantity, price } = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacture: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(props.product)}>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faMagnifyingGlass} shake size="sm" style={{ color: "#3b7722" }} />
      </button>
    </div>
  );
};
export default Product;
