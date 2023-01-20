import React from "react";
import "./Message.css";
import Location from "./Location";

import useInput from "./useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim() !== "";

const Message = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEMailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEMailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <Location />
      <form onSubmit={formSubmitHandler} className="form-container">
        <div className="form-group">
          <div className={firstNameInputClasses}>
            <label htmlFor="name">First Name* </label>
            <input
              value={firstNameValue}
              type="text"
              id="name"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameInputHasError && (
              <p className="error-text">Please enter a first name</p>
            )}
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor="l-name">Last Name* </label>
            <input
              type="text"
              id="l-name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameInputHasError && (
              <p className="error-text">Please enter a last name</p>
            )}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address* </label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className="error-text">Please enter valid email address</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="message">Send a Message </label>
          <textarea type="text" id="message" rows={1} />
        </div>
        <div className="form-control">
          <p>Fields marked as * are mandatory</p>
          <p>We will respond to you as quickly as possible</p>
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid} className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Message;
