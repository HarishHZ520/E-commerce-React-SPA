import React from "react";
import "./Shop.css";
import { useLayoutEffect } from "react";
// import sareeCollections from "../../Images/images/2-29.jpg";
import salwarCollections from "../../Images/images/salwar.jpg";
import shoeCollections from "../../Images/images/shoe.jpg";

import { Link } from "react-router-dom";

const Shop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="shopBox-container">
      <h2 className="shopbox-header">Categories</h2>

      <div className="saree-image">
        <div className="saree-text">
          <h2>Saree Collections</h2>
          <Link to="sarees" onClick={scrollHandler}>
            Shop now
          </Link>
        </div>
      </div>

      <div className="collection-container">
        <div className="salwar-image">
          <img
            src={salwarCollections}
            alt="salwar-collections"
            width={"300px"}
          ></img>
          <div className="salwar-text">
            <h2>Salwar Collections</h2>
            <Link to="salwars" onClick={scrollHandler}>
              Shop now
            </Link>
          </div>
        </div>

        <div className="shoe-image">
          <img
            src={shoeCollections}
            alt="shoe-collections"
            width={"300px"}
          ></img>
          <div className="shoe-text">
            <h2>Sandal Collections</h2>
            <Link to="sandals" onClick={scrollHandler}>
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
