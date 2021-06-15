// import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import CarouselSlide from './Carousel/Carousel';
import Product from './Product/Product';
import Services from './Services';
import useStyles from './styles';

const Products = ({ products, onAddToCart, emptyErrors }) => {
  const classes = useStyles();
  useEffect(() => {
    emptyErrors();
  }, []);

  return (
    <main className='flex flex-col justify-center z-0 mt-0 md:mt-0 relative'>
      <CarouselSlide />
      <Services />
      <hr id='products' className='my-3'></hr>
      <h1 className='md:mt-7 text-center text-4xl underline text-yellow-900 uppercase'>
        Our Products
      </h1>
      <div className='GridContainer mt-0 p-5 md:px-16 grid gap-10 md:grid-cols-3'>
        {products.map((item) => (
          <Product item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
};

export default Products;
