import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CarItem/CartItem';
import { Fragment } from 'react';

function FilledCart({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) {
  return (
    <div className='mb-0'>
      <div className='GridContainer mt-0 p-5 md:px-16 grid gap-10 md:grid-cols-3'>
        {cart.line_items.map((item) => (
          <CartItem
            item={item}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className='SubAndCheckOut flex flex-col items-center md:flex-row md:justify-around'>
        <h2 className='flex text-xl md:text-2xl underline items-center font-bold'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </h2>
        <div className='flex items-center gap-x-8'>
          <button
            className='flex gap-x-1 uppercase mt-5 px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
            onClick={handleEmptyCart}
          >
            Empty Cart
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 inline-block'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <Link to='/checkout'>
            <button className='flex uppercase mt-5 px-3 py-2 bg-yellow-800 text-white text-sm font-medium rounded hover:bg-yellow-900 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'>
              Continue to Checkout{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilledCart;
