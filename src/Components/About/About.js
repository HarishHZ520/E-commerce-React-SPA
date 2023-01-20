import React, { Fragment } from "react";
import AboutContent from "./AboutContent";
import Review from "./Review";
import { useLayoutEffect } from "react";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <AboutContent />
      <Review />
    </Fragment>
  );
};

export default About;
