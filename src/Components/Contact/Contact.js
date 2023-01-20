import React from "react";

import Message from "./Message";
import "./Contact.css";
import { useLayoutEffect } from "react";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="contact-container">
      <Message />
    </div>
  );
};

export default Contact;
