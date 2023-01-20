import React from "react";
import "./About.css";

import LoremIpsum from "react-lorem-ipsum";
import Banner from "../../Images/images/banner.png";

const AboutContent = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <section>
          <img className="about-banner" src={Banner} alt={Banner} />
        </section>
        <section className="about-para">
          <LoremIpsum p={2} random={false} />
        </section>
      </div>
    </section>
  );
};

export default AboutContent;
