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

// function Product({ item }) {
//   const classes = useStyles();

//   return (
//     <div>
//       <Card className={classes.root}>
//         <CardMedia className={classes.media} image='' title={item.name} />
//         <CardContent>
//           <div className={classes.cardContent}>
//             <Typography variant='h5' gutterBottom>
//               {item.name}
//             </Typography>
//             <Typography variant='h5'>{item.price}</Typography>
//           </div>
//           <Typography varian='h2' color='textSecondary'>
//             {item.description}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing className={classes.cardActions}>
//           <IconButton aria-label='Add to Cart'>
//             <AddShoppingCart />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// export default Product;
