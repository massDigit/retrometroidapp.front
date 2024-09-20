"use client";
import React from "react";
import "./styles/globals.css"; // Assurez-vous que le chemin est correct
import CarouselComponent from "./components/CarouselComponent"; // Assurez-vous que le chemin est correct
import Header from "./components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
    </div>
  );
};

export default Page;