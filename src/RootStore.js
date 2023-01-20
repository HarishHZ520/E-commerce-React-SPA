import React from "react";
import Shop from "./Components/Shop/Shop";
import { Outlet } from "react-router";

const RootStore = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootStore;
