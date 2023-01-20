import React from "react";

import "../Saree/Saree.css";

import { SalwarList } from "../../../../Store/States/SalwarList";
import { Link } from "react-router-dom";
import { BiUpArrow } from "react-icons/bi";

const Salwar = () => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="shopBox-container">
      <h2 className="shopbox-header">Salwars Collections</h2>
      <div className="store-container">
        {SalwarList.map((items, index) => (
          <div className="item-container" key={items.id}>
            <h2 className="item-container-head">{items.title}</h2>
            <img src={items.image} alt="image" className="item-con-img"></img>
            <Link to={`${items.id}`} className="item-btn">
              <BiUpArrow className="item-btn-up" />
              View this
            </Link>
          </div>
        ))}
      </div>
      <div className="store-container__btn">
        <Link to={"../sarees"} onClick={scrollHandler}>
          Back to saree section
        </Link>
        <Link to={".."} onClick={scrollHandler}>
          Back to category
        </Link>
        <Link to={"../sandals"} onClick={scrollHandler}>
          Next to sandal section
        </Link>
      </div>
    </section>
  );
};

export default Salwar;
