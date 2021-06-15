import { Button, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CarItem/CartItem';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import useStyles from './styles';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  useEffect(() => {
    console.log(cart);
  });

  if (!cart.line_items) return 'Loading...';

  return (
    <div className='mt-5 text-center h-screen'>
      <h2 className='text-2xl mb-5 font-bold text-yellow-900'>
        Your Shopping Cart
      </h2>
      {!cart.line_items.length ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleEmptyCart={handleEmptyCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default Cart;

{
  /*  */
}
