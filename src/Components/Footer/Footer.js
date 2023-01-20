import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import logo from "../../Images/images/MSlogo.png";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import paymentCard from "../../Images/images/img/pay/pay.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="details">
            <p>
              <strong> Address : </strong>Aishwarya Nagar, Udumalpet.
            </p>
            <p>
              <strong>Phone : </strong>
              <a className="footer-contact" href="tell:+91-1234567890">
                +91-1234567890
              </a>
            </p>
            <p>
              <strong>Email : </strong>
              <a className="footer-contact" href="mailto:abc@example.com">
                abc@example.com
              </a>
            </p>
            <p>
              <strong>Hours : </strong>9 AM - 6 PM, Mon-Sun
            </p>
          </div>
          <div className="followus">
            <strong>Follow Us</strong>
            <a href="/">
              <FaInstagram
                className="social-links"
                size="40px"
                target="_blank"
              />
            </a>
            <a href="/">
              <SlSocialYoutube
                className="social-links"
                size="40px"
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col about">
        <Link to={"/login"}>Sign In</Link>
        <a href="/">Track My Order</a>
        <a href="/">Help</a>
        <a href="/">Privacy Policy</a>
        <a href="/">FAQ's</a>
        <div className="apps">
          <p>Secured Payment Gateways</p>
          <img id="img" src={paymentCard} alt="paymentcards" />
        </div>
      </div>

      <div className="col col-1 subscribe">
        <h2 className="subs-head">STAY IN TOUCH</h2>
        <form className="subs-form">
          <label htmlFor="email">Join our mailing list</label>
          <input
            type="email"
            name="email"
            className="subs-input"
            placeholder="Enter your email here* "
            required
            size="30"
            autoComplete="off"
          ></input>
        </form>
        <button className="subs-btn">Subscribe Now</button>
      </div>

      <div className="col copyright">
        <p>© 2023, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
