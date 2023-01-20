import "./MainHero.css";

import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <section className="mainbg">
      <h4 className="mainbg-header">
        Super value deals{" "}
        <span className="mainbg-header__heading">On all products</span>
      </h4>
      <p className="mainbg-para">
        Save more with coupons & up to <span className="span">30% off!</span>
      </p>
      <Link to="/store">
        <button className="mainbg-shop__btn">Shop Now</button>
      </Link>
    </section>
  );
};

export default MainHero;
