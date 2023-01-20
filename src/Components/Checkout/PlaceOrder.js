import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import "./PlaceOrder.css";

import { cartActions } from "../../Store/CartSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const PlaceOrder = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(
          "https://react-6bce7-default-rtdb.asia-southeast1.firebasedatabase.app/formdata.json"
        );

        if (!response.ok) {
          throw new Error("Fetching Form Data Failed");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFormData();
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    // <div>hi</div>
    <div className="final-container">
      <h2 className="final-container-head">Order Summary</h2>
      <div>
        {cartItems.map((items, index) => (
          <div className="item-final-container" key={items.id}>
            <p className="item-final-con-head">
              <span>{index + 1}.</span>
              <span>{items.title}</span>
              <span>({items.quantity})</span>
            </p>
            <strong>Rs.{items.price}</strong>
          </div>
        ))}
        <div className="final-amount">
          <p>Delivery : Free</p>
          <p>
            Amount to be Paid :<span> Rs.{cartTotalAmount}</span>
          </p>
        </div>
      </div>
      <div className="address-container">
        <h2 className="ship-head">Shipping Details</h2>
        {data.map((data, index) => (
          <div className="address-content" key={index}>
            <h1 className="address-con-head">
              {data.firstName} {data.lastName}
            </h1>
            <p className="address-con-no">
              {data.streetName} - {data.pincode},
            </p>
            <p className="address-con-city">
              {data.city}, {data.state}, {data.country}.
            </p>
            <p>{data.number}</p>
            <p>{data.email}</p>
          </div>
        ))}
      </div>
      <div className="confirm-btn">
        <Link to={"/confirm"}>
          <button onClick={clearCartHandler}>Confirm Order</button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrder;
