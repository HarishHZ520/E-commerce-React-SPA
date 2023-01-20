import React from "react";
import "./Review.css";

import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <AiOutlineDoubleRight className="arrow-btn-right slider__btn" />
      ) : (
        <AiOutlineDoubleLeft className="arrow-btn-left slider__btn" />
      )}
    </button>
  );
}
