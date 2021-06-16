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
  // ITEM QUANTITY: item.quantity
  // INCREMENT BUTTON: onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
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
        <div className='flex flex-row justify-around'>
          <div className='mt-2'>
            <label className='text-gray-700 text-sm' for='count'>
              Quantity:
            </label>
            <div className='flex items-center mt-1'>
              {/* DECREMENT here */}
              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                className='text-gray-500 focus:outline-none focus:text-gray-600'
              >
                <svg
                  className='h-7 md:h-5 md:w-5'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </button>
              <span className='text-gray-700 text-lg mx-2'>
                {item.quantity}
              </span>
              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                className='text-gray-500 focus:outline-none focus:text-gray-600'
              >
                <svg
                  className='h-7 md:h-5 md:w-5'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemoveFromCart(item.id)}
            className='flex uppercase max-h-8 mt-5 px-3 py-2 bg-red-700 text-white text-xs font-medium rounded hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 disabled:opacity-30'
          >
            REMOVE
          </button>
        </div>
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
