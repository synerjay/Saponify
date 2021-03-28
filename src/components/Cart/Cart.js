import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart. Start adding some!
    </Typography>
  );

  const FilledCart = () => (
    <Fragment>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );

  return (
    <div>
      <Container>
        <div className={classes.toolbar}></div>
        <Typography className={classes.title} variant='h3'>
          {' '}
          Your Shopping Cart{' '}
        </Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
