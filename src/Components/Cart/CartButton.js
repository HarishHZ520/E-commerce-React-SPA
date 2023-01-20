import { useSelector } from "react-redux";

import cartImage from "../../Images/fonts/shopping-bag.png";
import "./Cart.css";
import { Link } from "react-router-dom";

const CartButton = () => {
  const totalItems = useSelector((state) => state.cart.cartTotalItems);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to="/cart" className="cart" onClick={scrollHandler}>
      <img
        src={cartImage}
        alt="cart-icon"
        className="cart-image"
        width="40px"
      />
      <span className="badge">{totalItems}</span>
    </Link>
  );
};

export default CartButton;
