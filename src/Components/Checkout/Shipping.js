import React, { useRef } from "react";
import "./Shipping.css";
import { useNavigate } from "react-router";
import useInput from "../Contact/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim() !== "";

const Shipping = () => {
  const navigate = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();
  const countryInputRef = useRef();
  const stateInputRef = useRef();
  const cityInputRef = useRef();
  const pincodeInputRef = useRef();
  const streetNameInputRef = useRef();

  const { reset: resetFirstNameInput } = useInput(isNotEmpty);
  const { reset: resetLastNameInput } = useInput(isNotEmpty);
  const { reset: resetEmailInput } = useInput(isEmail);
  const { reset: resetNumberInput } = useInput(isNotEmpty);
  const { reset: resetCnInput } = useInput(isNotEmpty);
  const { reset: resetStInput } = useInput(isNotEmpty);
  const { reset: resetCtInput } = useInput(isNotEmpty);
  const { reset: resetPnInput } = useInput(isNotEmpty);
  const { reset: resetSnInput } = useInput(isNotEmpty);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const sendData = async () => {
      try {
        const response = await fetch(
          "https://react-6bce7-default-rtdb.asia-southeast1.firebasedatabase.app/formdata.json",
          {
            method: "PUT",
            body: JSON.stringify([
              {
                firstName: firstNameInputRef.current.value,
                lastName: lastNameInputRef.current.value,
                email: emailInputRef.current.value,
                number: numberInputRef.current.value,
                country: countryInputRef.current.value,
                state: stateInputRef.current.value,
                city: cityInputRef.current.value,
                pincode: pincodeInputRef.current.value,
                streetName: streetNameInputRef.current.value,
              },
            ]),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Form Data Failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();

    navigate("/placeorder");

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetNumberInput();
    resetCnInput();
    resetStInput();
    resetCtInput();
    resetPnInput();
    resetSnInput();
  };

  return (
    <div className="shipping-form-container">
      <form onSubmit={formSubmitHandler} className="shipping-form-card">
        <label htmlFor="firstName">First Name</label>
        <input
          type={"text"}
          id="firstName"
          ref={firstNameInputRef}
          required
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type={"text"}
          id="lastName"
          ref={lastNameInputRef}
          required
        ></input>
        <label htmlFor="email">E-Mail</label>
        <input type={"email"} id="email" ref={emailInputRef} required></input>
        <label htmlFor="number">Phone Number</label>
        <input
          type={"number"}
          id="number"
          ref={numberInputRef}
          required
        ></input>
        <label htmlFor="country">Country</label>
        <input
          type={"text"}
          id="country"
          ref={countryInputRef}
          required
        ></input>
        <label htmlFor="state">State</label>
        <input type={"text"} id="state" ref={stateInputRef} required></input>
        <label htmlFor="city">City</label>
        <input type={"text"} id="city" ref={cityInputRef} required></input>
        <label htmlFor="pincode">Pincode</label>
        <input
          type={"number"}
          id="pincode"
          ref={pincodeInputRef}
          required
        ></input>
        <label htmlFor="address">Street Name</label>
        <input
          type={"text"}
          id="streetName"
          ref={streetNameInputRef}
          required
        ></input>
        <p>* Enter valid inputs in all fields</p>
        <button type="submit" className="placeorder-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Shipping;
