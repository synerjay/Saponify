import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

import React from 'react';

const Product = ({ item, onAddToCart }) => {
  const classes = useStyles();

  console.log(item);
  // important parts of the Product Component are:
  // IMAGE OF ITEM: item.media.source
  // NAME OF ITEM: item.name
  // PRICE: item.price.formatted_with_symbol
  // ITEM ID: item.id
  // DESCRIPTION: item.description  // needs to be in a dangerouslySetInnerHTML p tag HTML
  // ADD TO CART method: onAddToCart(item.id, 1)

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={item.media.source}
          title={item.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h6' gutterBottom>
              {item.name}
            </Typography>
            <Typography variant='h6'>
              {item.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: item.description }}
            noWrap
            variant='body2'
            color='textSecondary'
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label='Add to Cart'
            onClick={() => onAddToCart(item.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
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
