"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "@components/CustomButton"; // Assurez-vous que ce chemin est correct

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/a1.png", "/a6.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={images[currentImage]}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>

      <div className="hero__button-container mt-4">
        <CustomButton
          title="Explore Consoles"
          containerStyles="bg-primary-blue text-white rounded-full px-2 py-1 text-sm"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
