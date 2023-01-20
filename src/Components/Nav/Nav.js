import React from "react";

import CartButton from "../Cart/CartButton";
import "./Nav.css";
import NavigationLinks from "./NavigationLinks";

const Nav = () => {
  return (
    <nav className="navigation">
      <NavigationLinks />
      <CartButton />
    </nav>
  );
};

export default Nav;
