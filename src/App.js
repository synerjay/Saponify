import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);

  // use useEffects to load the products

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // data is already destructured. and set it to the component state

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  // Add products to Commerce.js website.... At least 8 products

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
