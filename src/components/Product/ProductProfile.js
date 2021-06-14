import React, { useEffect, useState } from 'react';

function ProductProfile({ products, match, fetchProducts, onAddToCart }) {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // important parts of the Product Component are:
  // IMAGE OF ITEM: item.media.source
  // NAME OF ITEM: item.name
  // PRICE: item.price.formatted_with_symbol
  // ITEM ID: item.id
  // DESCRIPTION: item.description  // needs to be in a dangerouslySetInnerHTML p tag HTML
  // ADD TO CART method: onAddToCart(item.id, 1)

  const getProductInfoById = (productId) => {
    const item = products.find((item) => item.id === productId);
    setItem(item);
  };

  // Fetch Products at start up
  useEffect(() => {
    fetchProducts();
  }, []);

  //Once products state has changed, it fires the getProductInfo function
  useEffect(() => {
    getProductInfoById(match.params.id);
    console.log(item);
  }, [products]);

  return (
    <main className='mt-0 md:mt-8 w-screen h-auto md:h-full md:mb-36 '>
      {item && (
        <div className='flex flex-col md:flex-row justify-center gap-x-14 '>
          <div className='flex flex-col relative'>
            <img
              class='h-32 mx-auto w-full md:h-full md:rounded-md object-cover max-w-lg'
              src={item.media.source}
              alt={item.name}
            />
            <div
              className={
                'badge text-white text-sm md:text-xl absolute top-0 p-4 ml-2 mt-2 ' +
                (item.is.sold_out ? 'bg-red-500 ' : 'bg-green-500')
              }
            >
              {item.is.sold_out ? (
                <span> Sold Out</span>
              ) : (
                <span>In Stock </span>
              )}
            </div>
          </div>
          <div className='flex flex-col w-full p-6 md:p-0 md:w-72 '>
            <h1 className='font-bold text-yellow-900 text-2xl'>{item.name}</h1>
            <span
              dangerouslySetInnerHTML={{ __html: item.description }}
              className='block text-gray-500 text-sm'
            />
            <span className='text-gray-500 mt-3'>
              {item.price.formatted_with_symbol}
            </span>
            <hr className='my-3'></hr>
            <div className='mt-2'>
              <label className='text-gray-700 text-sm' for='count'>
                Quantity:
              </label>
              <div className='flex items-center mt-1'>
                <button
                  onClick={handleIncrement}
                  className='text-gray-500 focus:outline-none focus:text-gray-600'
                  disabled={item.is.sold_out}
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
                <span className='text-gray-700 text-lg mx-2'>{quantity}</span>
                <button
                  onClick={handleDecrement}
                  className='text-gray-500 focus:outline-none focus:text-gray-600'
                  disabled={item.is.sold_out}
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
              </div>
              <button
                onClick={() => onAddToCart(item.id, quantity)}
                className='flex uppercase mt-5 px-3 py-2 bg-yellow-900 text-white text-sm font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
                disabled={item.is.sold_out}
              >
                {item.is.sold_out ? <p>Sold Out</p> : <p>Add to Cart</p>}{' '}
                <svg
                  className='ml-2 h-5 w-5 mr-0'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductProfile;
