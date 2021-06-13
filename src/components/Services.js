import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='flex flex-row w-screen justify-evenly'>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faShippingFast} />
      </div>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faHandHoldingHeart} />
      </div>
      <div className='service'>
        <FontAwesomeIcon className='text-8xl' icon={faHeadset} />
      </div>
    </div>
  );
}

export default Services;
