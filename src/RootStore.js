import React from "react";

import { Outlet } from "react-router";

const RootStore = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootStore;
