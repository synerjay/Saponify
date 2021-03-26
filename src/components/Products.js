import { Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';
import useStyles from './styles';

const Products = () => {
  const classes = useStyles();

  const products = [
    {
      name: 'Shoes',
      description: 'Shoes',
      image:
        'https://assets.ajio.com/medias/sys_master/root/h15/h14/11987536150558/-473Wx593H-460274692-black-MODEL.jpg',
      price: '$5',
      id: 1,
    },
    {
      name: 'Macbook',
      description: 'Computers',
      image:
        'https://media.istockphoto.com/photos/photo-of-macbook-pro-picture-id511071832?k=6&m=511071832&s=612x612&w=0&h=UFEdfrJySKXB3DrDwzwvvP-jmLJX4utxCyQw0mdgPbM=',
      price: '$10',
      id: 2,
    },
  ];
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

// function Products() {
//   const productsArray = [
//     {
//       name: "Yoshi's birthday bash",
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//       title: 'reminders',
//       id: 1,
//     },
//     {
//       name: 'Complete my ninja training',
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
//       title: 'work',
//       id: 2,
//     },
//   ];

//   return (
//     <main>
//       <Grid container justify='center' spacing={4}>
//         {productsArray.map((item) => (
//           <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
//             <Product item={item} />
//           </Grid>
//         ))}
//       </Grid>
//     </main>
//   );
// }

// export default Products;