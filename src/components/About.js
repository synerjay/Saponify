import React from 'react';

function About() {
  return (
    <div className='h-auto flex flex-col justify-center items-center mx-24 my-10'>
      <div className='justify-center text-base'>
        <h2 className='text-center text-2xl font-bold underline uppercase'>
          About us
        </h2>
        <p>
          Here at Saponify we pride ourselves in delivering the highest quality
          artisan soaps to your home. I hope our soaps can bring so much joy to
          your life.
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
        <h1 className='text-center'>The Team at Saponify</h1>
        <div className='flex flex-col md:flex-row md:gap-x-24 '>
          <div>
            <h4>Jiro - Operations Director</h4>
            <img src='' />
          </div>
          <div>
            <h4>Mika - Supply Manager</h4>
            <img src='' />
          </div>
          <div>
            <h4>Chihiro - Marketing</h4>
            <img src='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
