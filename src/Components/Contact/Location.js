import React from "react";
import "./Location.css";

const Location = () => {
  const location = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13191.718676336577!2d77.24766161643672!3d10.585316231274637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cd4da3ea6757%3A0x77243d4c322d09e2!2sMonolisaa%20sarees%20and%20salwars!5e0!3m2!1sen!2sin!4v1673602523915!5m2!1sen!2sin"
      className="map"
      loading="lazy"
      title="location"
    ></iframe>
  );

  return <div className="map-container">{location}</div>;
};

export default Location;
