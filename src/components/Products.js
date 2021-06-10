import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, emptyErrors }) => {
  const classes = useStyles();

  useEffect(() => {
    emptyErrors();
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
            <Product item={item} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
