"use client";

import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Carousel from "./components/Caroussel";

const Page = () => {
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

export default Page;