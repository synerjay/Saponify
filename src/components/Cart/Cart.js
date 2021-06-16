import React, { useEffect } from 'react';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  if (!cart.line_items)
    return (
      <div className='flex justify-center items-center h-screen'>
        <h2 className='text-4xl font-bold text-center'>Loading...</h2>
      </div>
    );

  return (
    <div className='mt-5 mb-9 text-center h-auto md:h-auto'>
      <h2 className='text-2xl mb-5 font-bold text-yellow-900'>
        Your Shopping Cart{' '}
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
