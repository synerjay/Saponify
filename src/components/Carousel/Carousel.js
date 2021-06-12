import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/carouselimages/carousel1.jpeg';
import carousel2 from '../../assets/carouselimages/carousel2.jpeg';
import carousel3 from '../../assets/carouselimages/carousel3.jpeg';
import carousel4 from '../../assets/carouselimages/carousel4.jpeg';
import carousel5 from '../../assets/carouselimages/carousel5.jpeg';

function CarouselSlide() {
  // API to get images: https://source.unsplash.com/1024x400/?fashion

  //https://source.unsplash.com/400x400/?watches
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      infiniteLoop={true}
      dynamicHeight={false}
      centerMode={true}
      centerSlidePercentage={90}
      width='100%'
    >
      <div>
        <img className='h-4/6' alt='' src={carousel1} />
      </div>
      <div>
        <img className='h-4/6' alt='' src={carousel2} />
      </div>
      <div>
        <img className='h-4/6' alt='' src={carousel3} />
      </div>
      <div>
        <img className='h-4/6' alt='' src={carousel4} />
      </div>
      <div>
        <img className='h-4/6' alt='' src={carousel5} />
      </div>
    </Carousel>
  );
}

export default CarouselSlide;
