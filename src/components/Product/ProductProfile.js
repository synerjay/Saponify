import React, { useEffect, useState } from 'react';

function ProductProfile({ products, match, fetchProducts }) {
  const [item, setItem] = useState(null);

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
    <div className='mt-20 w-screen'>
      {item && (
        <div className='flex flex-row justify-center gap-x-14 '>
          <div className='flex flex-col'>
            <img
              class='h-full w-full rounded-md object-cover max-w-lg mx-auto'
              src={item.media.source}
              alt='Nike Air'
            />
            {/* <img
              src={item.media.source}
              alt='noodles'
              className='w-auto h-auto sm:h-48 object-cover'
            />{' '} */}
            <h1 className='font-bold text-2xl'>{item.name}</h1>
            <span
              dangerouslySetInnerHTML={{ __html: item.description }}
              className='block text-gray-500 text-sm'
            />
          </div>
          <div className='flex flex-col w-72 '>
            <span className='text-gray-500 mt-3'>
              {item.price.formatted_with_symbol}
            </span>
            <hr className='my-3'></hr>
            <div className='mt-2'>
              <label className='text-gray-700 text-sm' for='count'>
                Count:
              </label>
              <div className='flex items-center mt-1'>
                <button className='text-gray-500 focus:outline-none focus:text-gray-600'>
                  <svg
                    className='h-5 w-5'
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
                <span className='text-gray-700 text-lg mx-2'>20</span>
                <button className='text-gray-500 focus:outline-none focus:text-gray-600'>
                  <svg
                    className='h-5 w-5'
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductProfile;
