import React from "react";

import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/CartSlice";
import { SareeList } from "../../../Store/States/SareeList";
import { Link } from "react-router-dom";
import { SalwarList } from "../../../Store/States/SalwarList";
import { SandalList } from "../../../Store/States/SandalList";

let itemList = "";

const ProductItems = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatch = useDispatch();

  const params = useParams();

  if (params.type === "sarees") {
    itemList = SareeList;
  } else if (params.type === "salwars") {
    itemList = SalwarList;
  } else if (params.type === "sandals") {
    itemList = SandalList;
  } else {
    itemList = "";
  }

  const items = itemList.find((items) => items.id === Number(params.id));

  const { id, image, title, price } = items;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        image,
        title,
        price,
      })
    );
  };

  return (
    <div className="saree-shop-container" key={items.id}>
      <img
        src={items.image}
        className="saree-shop-image"
        alt={`${params.type} ${params.id}`}
        width={"400px"}
        height={"400px"}
      ></img>
      <div className="container-text-side">
        <h3 className="container-text-header">{items.title}</h3>
        <span className="container-text-description">{items.description}</span>
        <div className="container-price">
          <span className="price">Rs.{items.price}</span>
          <span className="rating">{items.rating}</span>
        </div>
        <div className="container-add_cart">
          <Link to={`../${params.type}`} className="add_cart">
            Back
          </Link>
          <button className="add_cart" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItems;
