import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CarItem/CartItem';
import useStyles from './styles';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  useEffect(() => {
    console.log(cart);
  });
  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart.{' '}
      <Link to='/' className={classes.link}>
        Start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <Fragment>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
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
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to='/checkout'
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
  if (!cart.line_items) return 'Loading...';

  return (
    <div>
      <Container>
        <div className={classes.toolbar}></div>
        <Typography className={classes.title} variant='h3' gutterBottom>
          {' '}
          Your Shopping Cart{' '}
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
