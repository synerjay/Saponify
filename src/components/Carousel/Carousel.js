import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselSlide() {
  // API to get images: https://source.unsplash.com/1024x400/?fashion

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
        <img
          className='h-4/6'
          alt=''
          src='https://images.unsplash.com/photo-1572577892547-18d319fcece6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzMzI3OTUx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024'
        />
      </div>
      <div>
        <img
          className='h-4/6'
          alt=''
          src='https://images.unsplash.com/photo-1537832816519-689ad163238b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzMzI4MDU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024'
        />
      </div>
      <div>
        <img
          className='h-4/6'
          alt=''
          src='https://images.unsplash.com/photo-1561972793-b361046d7b3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzMzI4MDkw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024'
        />
      </div>
    </Carousel>
  );
}

export default CarouselSlide;
