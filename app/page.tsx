"use client";

import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Caroussel";
import Card from "./components/Card";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-col items-center gap-5">
        <section className="w-full">
          <Carousel />
        </section>
        <section className="w-full flex justify-center">
          <Card />
        </section>
      </main>
    </div>
  );
};

export default Home;
