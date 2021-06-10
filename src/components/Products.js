// import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import CarouselSlide from './Carousel/Carousel';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, emptyErrors }) => {
  const classes = useStyles();

  useEffect(() => {
    emptyErrors();
  }, []);

  return (
    <main className='flex flex-col justify-center mt-16 md:mt-16'>
      <CarouselSlide />
      <div className='mt-2 p-3 md:p-16 grid gap-10 md:grid-cols-3'>
        {products.map((item) => (
          <Product item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
};

export default Products;

{
  /* <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
            <Product item={item} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main> */
}
