import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOutForm/Checkout/Checkout';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import ProductProfile from './components/Product/ProductProfile';
import Products from './components/Products';
import { commerce } from './lib/commerce';

const App = () => {
  //State Hooks
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  console.log(errorMessage);
  // use useEffects to load the products

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // data is already destructured. and set it to the component state

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  // Once the last order is sent, we need a fresh new cart
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      console.log(incomingOrder);
      setOrder(incomingOrder);
      console.log('Is it Working??');
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log("It's NOT working!!!!");
    }
  };

  const emptyErrors = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Add products to Commerce.js website.... At least 8 products

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              emptyErrors={emptyErrors}
            />
          </Route>
          <Route
            exact
            path='/product/:id'
            render={(props) => (
              <ProductProfile
                {...props}
                products={products}
                fetchProducts={fetchProducts}
                onAddToCart={handleAddToCart}
              />
            )}
          />
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path='/checkout'>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
