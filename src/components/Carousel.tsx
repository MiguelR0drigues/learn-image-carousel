// src/components/Carousel.tsx

import React, { useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={"slide"}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="button-bar">
        <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="slide-selection-preview">
          {images.map((image, index) => (
            <div
              className={
                currentIndex !== index
                  ? "slide-selector"
                  : "slide-selector active"
              }
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
