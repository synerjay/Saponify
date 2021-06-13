import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='flex flex-row w-screen justify-evenly'>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faCoffee} />
      </div>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faCoffee} />
      </div>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faCoffee} />
      </div>
    </div>
  );
}

export default Services;
