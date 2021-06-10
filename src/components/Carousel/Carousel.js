import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselSlide() {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      infiniteLoop={true}
      width='100%'
    >
      <div>
        <img alt='' src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg' />
      </div>
      <div>
        <img alt='' src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' />
      </div>
      <div>
        <img alt='' src='http://lorempixel.com/output/cats-q-c-640-480-3.jpg' />
      </div>
    </Carousel>
  );
}

export default CarouselSlide;
