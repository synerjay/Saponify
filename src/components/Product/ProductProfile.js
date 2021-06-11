import React, { useEffect, useState } from 'react';

function ProductProfile({ products, match }) {
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
    console.log(item);
    console.log(match);
  };

  useEffect(() => {
    getProductInfoById(match.params.id);
  }, []);

  return (
    <div className='mt-40 '>
      <h2 className='text-black'>
        {' '}
        This is the product profile with the item number: {match.params.id}{' '}
      </h2>
    </div>
  );
}

export default ProductProfile;
