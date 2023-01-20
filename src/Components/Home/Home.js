import { Fragment } from "react";

import MainHero from "./MainHero";
import Feature from "./Feature";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <MainHero />
      <Feature />
    </Fragment>
  );
};

export default Home;
