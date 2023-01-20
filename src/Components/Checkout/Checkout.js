import React from "react";
import { useLayoutEffect } from "react";
import Shipping from "./Shipping";

const Checkout = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Shipping />
    </div>
  );
};

export default Checkout;
