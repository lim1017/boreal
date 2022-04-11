import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bg1 from "../../imgs/bg1.png";
import glazeCake from "../../imgs/glazeCake.jpg";

export const Carousel = () => {
  return (
    <ReactCarousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      emulateTouch
      infiniteLoop
      interval={5000}
    >
      <div>
        <img src={bg1} />
      </div>
      <div>
        <img src={glazeCake} />
      </div>
    </ReactCarousel>
  );
};
