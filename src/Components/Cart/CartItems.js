import React from "react";
import "./CartItems.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const { id, image, title, price, quantity, totalPrice } = props.items;

  const incrementHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        image,
        title,
        price,
      })
    );
  };

  const deccrementHandler = () => {
    dispatch(cartActions.removeFromCart({ id, price }));
  };

  return (
    <div className="cart-container">
      <div>
        <img src={image} className="cartItem-image" alt="cartitemimage"></img>
      </div>
      <div className="cartItem-content">
        <h2 className="cartItem-header">{title}</h2>
        <span className="cartItem-product-no">
          <strong>Product no : </strong>
          {id}
        </span>
        <p className="cartItem-price">
          <strong>Price : </strong>Rs.{price}
        </p>
        <div className="cartItem-quantity">
          <strong>Quantity : </strong>
          <div className="cartItem-quantity-content">
            <button className="decrement-btn" onClick={deccrementHandler}>
              -
            </button>
            <p className="value-box">{quantity}</p>
            <button className="increment-btn" onClick={incrementHandler}>
              +
            </button>
          </div>
        </div>
        <p className="cartItem-totalprice">
          <strong>Total price : </strong>Rs.{totalPrice}
        </p>
      </div>
    </div>
  );
};

export default CartItems;
