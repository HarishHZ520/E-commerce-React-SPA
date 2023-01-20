import React, { useState } from "react";
import "./Review.css";
import ReviewData from "./ReviewData";
import BtnSlider from "./btnSlider";

const Review = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== ReviewData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === ReviewData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(ReviewData.length);
    }
  };

  return (
    <section className="review-container">
      <h3 className="section__header">Our Customer Reviews</h3>
      <div className="slider">
        {ReviewData.map((obj, index) => {
          return (
            <div key={obj.id}>
              <div
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <div className="testimonial">
                  <h5 className="testimonial__header">{obj.title}</h5>
                  <blockquote className="testimonial__text">
                    {obj.content}
                  </blockquote>
                </div>
              </div>
            </div>
          );
        })}

        <BtnSlider
          moveSlide={nextSlide}
          direction={"next"}
          className="slider__btn"
        />
        <BtnSlider
          moveSlide={prevSlide}
          direction={"prev"}
          className="slider__btn"
        />
      </div>
    </section>
  );
};

export default Review;
