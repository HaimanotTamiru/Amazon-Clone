import React from 'react';
import {img} from "./Carousel-img/data"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "./Carousel.module.css"

function CarouselEffect() {
  return (
    <div id="top">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return (
            <img key={imageItemLink} src={imageItemLink} alt="imageItem" />
          );
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;