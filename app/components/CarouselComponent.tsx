"use client";

import React, { useState } from "react";
import "../styles/CarouselComponent.css"; // Assurez-vous que le chemin est correct

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
  ]; // Remplacez par vos images

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-card">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CarouselComponent;
