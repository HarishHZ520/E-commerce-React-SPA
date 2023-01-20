import React, { useState } from "react";

import NavLinks from "./NavigationLinks";
import "./Nav.css";

import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

const MobileNav = () => {
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
    <button className="mobile-nav">
      {navBarOpen ? closeIcon : hamburgerIcon}
    </button>
  );
};

export default MobileNav;
