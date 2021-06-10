// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Typography,
// } from '@material-ui/core';
// import { AddShoppingCart } from '@material-ui/icons';

// import useStyles from './styles';

import React from 'react';

const Product = ({ item, onAddToCart }) => {
  console.log(item);
  // important parts of the Product Component are:
  // IMAGE OF ITEM: item.media.source
  // NAME OF ITEM: item.name
  // PRICE: item.price.formatted_with_symbol
  // ITEM ID: item.id
  // DESCRIPTION: item.description  // needs to be in a dangerouslySetInnerHTML p tag HTML
  // ADD TO CART method: onAddToCart(item.id, 1)

  return (
    <div className='card hover:shadow-xl'>
      <img
        src={item.media.source}
        alt='noodles'
        className='w-full h-32 sm:h-48 object-cover'
      />
      <div className='m-4'>
        <span className='font-bold'>{item.name}</span>
        <span
          dangerouslySetInnerHTML={{ __html: item.description }}
          className='block text-gray-500 text-sm'
        />
      </div>
      <div className='badge'>
        <svg
          className='w-5 inline-block'
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>In Stock</span>
      </div>
    </div>
  );
};

export default Product;

// const Product = ({ item, onAddToCart }) => {
//   const classes = useStyles();

//   console.log(item);

//   return (
//     <div>
//       <Card className={classes.root}>
//         <CardMedia
//           className={classes.media}
//           image={item.media.source}
//           title={item.name}
//         />
//         <CardContent>
//           <div className={classes.cardContent}>
//             <Typography variant='h6' gutterBottom>
//               {item.name}
//             </Typography>
//             <Typography variant='h6'>
//               {item.price.formatted_with_symbol}
//             </Typography>
//           </div>
//           <Typography
//             dangerouslySetInnerHTML={{ __html: item.description }}
//             noWrap
//             variant='body2'
//             color='textSecondary'
//           />
//         </CardContent>
//         <CardActions disableSpacing className={classes.cardActions}>
//           <IconButton
//             aria-label='Add to Cart'
//             onClick={() => onAddToCart(item.id, 1)}
//           >
//             <AddShoppingCart />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </div>
//   );
// };
