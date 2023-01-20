import React from "react";

import { Link } from "react-router-dom";
import { SandalList } from "../../../../Store/States/SandalList";
import { BiUpArrow } from "react-icons/bi";

const Sandal = () => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="shopBox-container">
      <h2 className="shopbox-header">Sandals Collections</h2>
      <div className="store-container">
        {SandalList.map((items, index) => (
          <div className="item-container" key={items.id}>
            <h2 className="item-container-head">{items.title}</h2>
            <img src={items.image} alt="sandal" className="item-con-img"></img>
            <Link to={`${items.id}`} className="item-btn">
              <BiUpArrow className="item-btn-up" />
              View this
            </Link>
          </div>
        ))}
      </div>
      <div className="store-container__btn">
        <Link to={"../salwars"} onClick={scrollHandler}>
          Back to salwar section
        </Link>
        <Link to={".."} onClick={scrollHandler}>
          Next to category section
        </Link>
      </div>
    </section>
  );
};

export default Sandal;
