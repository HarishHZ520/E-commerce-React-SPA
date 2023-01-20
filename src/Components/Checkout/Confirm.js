import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Confirm.css";
import { Link } from "react-router-dom";

const Backdrop = () => {
  return <div className="backdrop" />;
};

const Overlay = () => {
  return (
    <div className="placeOrder-container">
      <h2 className="thankyou">Thank you for your order</h2>
      <p>
        Your order number is <strong>#2001539</strong>. We have emailed your
        order confirmation, and will send you an update when your order has
        shipped.
      </p>
      <h2 className="dont-worry">Don't worry it's just a template !</h2>
      <Link to={"/"}>Go To Home</Link>
    </div>
  );
};

const Confirm = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Confirm;
