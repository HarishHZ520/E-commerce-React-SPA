import React from "react";

import { BiUpArrow } from "react-icons/bi";

import "./Saree.css";
import "../../Shop.css";
import "./Saree1.css";

import { SareeList } from "../../../../Store/States/SareeList";

import { Link } from "react-router-dom";

const Saree = () => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="shopBox-container">
      <h2 className="shopbox-header">Sarees Collections</h2>
      <div className="store-container">
        {SareeList.map((items) => (
          <div className="item-container" key={items.id}>
            <h2 className="item-container-head">{items.title}</h2>
            <img src={items.image} alt="saree" className="item-con-img"></img>
            <Link to={`${items.id}`} className="item-btn">
              <BiUpArrow className="item-btn-up" />
              View this
            </Link>
          </div>
        ))}
      </div>
      <div className="store-container__btn">
        <Link to={".."} onClick={scrollHandler}>
          Back to category section
        </Link>
        <Link to={"../salwars"} onClick={scrollHandler}>
          Next to salwar section
        </Link>
      </div>
    </section>
  );
};

export default Saree;
