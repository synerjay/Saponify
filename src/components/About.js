import React from 'react';

function About() {
  return (
    <div className='h-auto flex flex-col justify-center items-center mx-10 md:mx-32 my-10'>
      <div className='justify-center flex flex-col gap-y-4 text-base mb-10'>
        <h2 className='text-center text-2xl font-bold underline uppercase'>
          About us
        </h2>
        <p>
          Here at Saponify we pride ourselves in delivering the highest quality
          artisan soaps to your home. Our company mission to produce products
          that bring joy & comfort to your life.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          explicabo velit nulla. At quas et aut reiciendis modi assumenda, rerum
          quo aspernatur sapiente saepe repellat excepturi vel earum ex quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime
          eaque blanditiis accusamus. Quod veritatis quasi eveniet officia,
          alias sequi dolore nesciunt ipsam cumque et. Itaque doloribus ad
          doloremque magni.
        </p>
      </div>
      <hr />
      <div>
        <h1 className='text-center text-2xl font-bold underline uppercase mb-5'>
          The Team at Saponify
        </h1>
        <div className='flex flex-col gap-y-8 md:gap-y-0 md:flex-row md:gap-x-12 '>
          <div className='flex flex-col justify-center'>
            <h4 className='text-xl font-bold my-2 text-center'>
              Jiro - Operations Director
            </h4>
            <img
              className='rounded-full border h-80 w-80 object-cover border-gray-100 shadow-xl'
              src='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h4 className='text-xl font-bold my-2 text-center'>
              Mika - Supply Manager
            </h4>
            <img
              className='rounded-full border h-80 w-80 object-cover border-gray-100 shadow-sm'
              src='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h4 className='text-xl font-bold my-2 text-center'>
              Michelle - Marketing
            </h4>
            <img
              className='rounded-full border h-80 w-80 object-cover border-gray-100 shadow-sm'
              src='https://images.pexels.com/photos/3681591/pexels-photo-3681591.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
