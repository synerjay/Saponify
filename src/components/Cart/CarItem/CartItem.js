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

        <span className='block text-gray-500 text-sm'>
          {item.line_total.formatted_with_symbol}
        </span>
      </div>
      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className='bg-red-600 uppercase text-white rounded-full absolute top-0 right-0 p-2 mr-2 mt-2 shadow-xl disabled:opacity-50 focus hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-opacity-50'
      >
        Remove item
      </button>
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
