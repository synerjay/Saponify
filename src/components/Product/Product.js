import { AddShoppingCart } from '@material-ui/icons';

import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, onAddToCart }) => {
  console.log(item);
  // important parts of the Product Component are:
  // IMAGE OF ITEM: item.media.source
  // NAME OF ITEM: item.name
  // PRICE: item.price.formatted_with_symbol
  // ITEM ID: item.id
  // DESCRIPTION: item.description  // needs to be in a dangerouslySetInnerHTML p tag HTML
  // ADD TO CART method: onAddToCart(item.id, 1)

  return (
    <div className='card hover:shadow-xl'>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.media.source}
          alt='noodles'
          className='w-full h-32 sm:h-48 object-cover'
        />
      </Link>
      <div className='m-4'>
        <Link to={`/product/${item.id}`}>
          <span className='font-bold'>{item.name}</span>
        </Link>
        <span className='block text-gray-500 text-sm'>
          {item.price.formatted_with_symbol}
        </span>
        {/* <span
          dangerouslySetInnerHTML={{ __html: item.description }}
          className='block text-gray-500 text-sm'
        /> */}
      </div>
      <div className='badge'>
        <span>In stock</span>
      </div>
      <button
        onClick={() => onAddToCart(item.id, 1)}
        className='bg-white rounded-full absolute top-0 right-0 p-2 mr-2 mt-2 shadow-xl'
      >
        <AddShoppingCart />
      </button>
    </div>
  );
};

export default Product;
