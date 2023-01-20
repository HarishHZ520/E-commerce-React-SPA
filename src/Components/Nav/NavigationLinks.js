import { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

// import SignUpForm from "../Header/SignUpForm";

const NavigationLinks = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const buttonToggleHandler = () => {
    setNavBarOpen((prevState) => !prevState);
  };

  const hamburgerIcon = (
    <CgMenuRound
      className="hamburger"
      size="40px"
      color="#f1f0ed"
      onClick={buttonToggleHandler}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hamburger close-icon"
      size="40px"
      color="#f1f0ed"
      onClick={buttonToggleHandler}
    />
  );

  return (
    <nav className="main-nav">
      <ul
        className={navBarOpen ? "navbar mobile-nav" : "navbar navbar-close"}
        onClick={() => setNavBarOpen(false)}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div>{navBarOpen ? closeIcon : hamburgerIcon}</div>
    </nav>
  );
};

export default NavigationLinks;
