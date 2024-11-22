import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel: React.FC = () => {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
        }}
      >
        <SplideSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/a1.png" alt="Image 1" />
        </SplideSlide>
        <SplideSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/a6.png" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
