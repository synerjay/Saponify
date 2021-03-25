import { Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';

const Products = () => {
  const products = [
    {
      name: 'Shoes',
      description: 'Shoes',
      price: '$5',
      id: 1,
    },
    {
      name: 'Macbook',
      description: 'Computers',
      price: '$10',
      id: 2,
    },
  ];
  return (
    <main>
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
