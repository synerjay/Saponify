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
  }, [products]);

  return (
    <div className='mt-40 '>
      {item && (
        <div className='text-black'>
          <img
            src={item.media.source}
            alt='noodles'
            className='w-full h-32 sm:h-48 object-cover'
          />{' '}
          <span className='font-bold'>{item.name}</span>
          <span className='block text-gray-500 text-sm'>
            {item.price.formatted_with_symbol}
          </span>
          <span
            dangerouslySetInnerHTML={{ __html: item.description }}
            className='block text-gray-500 text-sm'
          />
        </div>
      )}
    </div>
  );
}

export default ProductProfile;
