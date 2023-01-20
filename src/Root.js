import React from "react";
import { Outlet } from "react-router";

import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
