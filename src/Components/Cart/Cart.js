import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import emptybag from "../../Images/images/emptybag.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const emptyCart = cartItems.length !== 0;

  const itemPresent = cartItems.map((items) => (
    <CartItems
      key={items.id}
      items={{
        title: items.title,
        id: items.id,
        image: items.image,
        quantity: items.quantity,
        price: items.price,
        totalPrice: items.totalPrice,
      }}
    />
  ));

  const diplayMessage = (
    <div className="display-message">
      <img src={emptybag} className="disp-image" alt="empty shopping bag"></img>
      <p className="disp-msg">Your Bag is Empty!...</p>
    </div>
  );

  return (
    <div className="cart_card-container">
      <h2 className="cart_cardheader">Your Shopping Bag</h2>
      <div className="cart_cartbox">
        {emptyCart ? itemPresent : diplayMessage}
      </div>
      <div className="cart_btn-content">
        <p className="cart-totalamount">TOTAL AMOUNT : Rs.{cartTotalAmount}</p>
        {emptyCart ? (
          <Link to={"/checkout"} className="cart-checkout_btn">
            Proceed to Checkout
          </Link>
        ) : (
          <p className="checkout-alert">
            "You need atleast one item to place order"
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
