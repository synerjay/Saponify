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
      <div className='SubAndCheckOut flex justify-between'>
        <h2 className='flex text-xl items-center'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </h2>
        <div className='flex items-center justify-around'>
          <button
            className='flex uppercase mt-5 px-3 py-2 bg-red-700 text-white text-sm font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
            onClick={handleEmptyCart}
          >
            Empty Cart
          </button>
          <button
            component={Link}
            className='flex uppercase mt-5 px-3 py-2 bg-green-700 text-white text-sm font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
          >
            Checkout
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default FilledCart;
