import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import CartItem from './CarItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items;
  const classes = useStyles();

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
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </div>
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
