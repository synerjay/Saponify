import React from 'react';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className='card hover:shadow-xl'>
      {/* Image here */}
      <img
        src={item.media.source}
        alt={item.name}
        className='w-full h-32 sm:h-48 object-cover'
      />
      <div className='m-4'>
        <span className='font-bold'>{item.name}</span>
        <div className='flex flex-row justify-around'>
          <div className='mt-2'>
            <label className='text-gray-700 text-sm' for='count'>
              Quantity:
            </label>
            <div className='flex items-center mt-1'>
              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                className='text-gray-500 focus:outline-none focus:text-gray-600'
              >
                <svg
                  className='h-7 md:h-5 md:w-5'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </button>
              <span className='text-gray-700 text-lg mx-2'>
                {item.quantity}
              </span>
              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                className='text-gray-500 focus:outline-none focus:text-gray-600'
              >
                <svg
                  className='h-7 md:h-5 md:w-5'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemoveFromCart(item.id)}
            className='flex uppercase gap-x-1 max-h-8 mt-5 px-3 py-2 bg-red-700 text-white text-xs font-medium rounded hover:bg-red-800 focus:outline-none focus:bg-red-700 disabled:opacity-30'
          >
            Remove Item{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 inline-block'
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
        </div>
      </div>
      <div className='bg-green-600 uppercase text-white rounded-full absolute top-0 right-0 p-2 mr-2 mt-2 shadow-xl'>
        ITEM TOTAL: {item.line_total.formatted_with_symbol}
      </div>
    </div>
  );
};

export default CartItem;
