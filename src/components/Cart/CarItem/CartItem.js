import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyles from './styles';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();

  // IMAGE: item.media.source
  // ITEM NAME: item.name
  // EACH ITEM TOTAL: item.line_total.formatted_with_symbol
  // DECREMENT BUTTON: onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
  // ITEM QUANTITY: onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
  // INCREMENT BUTTON: item.quantity
  // REMOVE ITEM FROM CART: onClick={() => handleRemoveFromCart(item.id)}

  return (
    <div className='card hover:shadow-xl'>
      {/* Image here */}
      <img
        src={item.media.source}
        alt={item.name}
        className='w-full h-32 sm:h-48 object-cover'
      />
      <div className='m-4'>
        <span className='font-bold'>{item.name}</span>
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className='flex uppercase mt-5 px-3 py-2 bg-yellow-900 text-white text-xs font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
        >
          REMOVE
        </button>
      </div>
      <div className='bg-green-600 uppercase text-white rounded-full absolute top-0 right-0 p-2 mr-2 mt-2 shadow-xl'>
        ITEM TOTAL: {item.line_total.formatted_with_symbol}
      </div>
    </div>
  );
};

export default CartItem;

{
  /* <div>
<Card>
  <CardMedia
    image={item.media.source}
    alt={item.name}
    className={classes.media}
  />
  <CardContent className={classes.cardContent}>
    <Typography variant='h5'>{item.name}</Typography>
    <Typography variant='h5'>
      {item.line_total.formatted_with_symbol}
    </Typography>
  </CardContent>
  <CardActions className={classes.cartActions}>
    <div className={classes.buttons}>
      <Button
        type='button'
        onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
      >
        <RemoveIcon />
      </Button>
      <Typography variant='h4'>{item.quantity}</Typography>
      <Button
        type='button'
        onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
      >
        <AddIcon />
      </Button>
    </div>
    <Button
      variant='contained'
      type='button'
      color='secondary'
      onClick={() => handleRemoveFromCart(item.id)}
    >
      Remove Item
    </Button>
  </CardActions>
</Card>
</div> */
}
