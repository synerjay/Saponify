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
    <Fragment>
      <div className='GridContainer mt-0 p-5 md:px-16 grid gap-10 md:grid-cols-3'>
        {cart.line_items.map((item) => (
          <CartItem
            item={item}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className='SubAndCheckOut flex justify-around'>
        <h2 className='flex text-lg items-center font-bold'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </h2>
        <div className='flex items-center gap-x-8'>
          <button
            className='flex uppercase mt-5 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded hover:bg-gray-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
            onClick={handleEmptyCart}
          >
            Empty Cart
          </button>
          <Link to='/checkout'>
            <button className='flex uppercase mt-5 px-3 py-2 bg-yellow-900 text-white text-xs font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default FilledCart;
