import useStyles from './styles';
import {
  Button,
  CircularProgress,
  Divider,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0); // 0 is AddressForm, 1 is PaymentForm
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();

  // In react, the JSX renders first and then useEffect,
  // if you are using tokens or ids to fetch, use conditionals && before it renders!
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        console.log(token);
        setCheckoutToken(token);
      } catch {
        // if (activeStep !== steps.length) history.pushState('/');
      }
    };
    // Since you cannot make an async function in useEffect, you have to call the function below WITHIN the userEffect
    generateToken();
    console.log('below is the token');
    console.log(checkoutToken);
    console.log(cart.id);
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Confirmation = () =>
    order.customer ? (
      <Fragment>
        <div>
          <Typography variant='h5'>
            Thank you for your purchase, {order.customer.firstname}{' '}
            {order.customer.lastname}!
          </Typography>
          <Divider classname={classes.divider} />
          <br />
          <Typography variant='subtitle2'>
            Your order reference number is:{' '}
            <strong>{order.customer_reference}</strong>
            <br />
            Please check your email for your order information to keep track of
            your shipping order.
          </Typography>
        </div>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/'>
          Go back to the Shop
        </Button>
      </Fragment>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <Fragment>
        <Typography variant='h5'>Error: {error}</Typography>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/'>
          Go back to the Shop
        </Button>
      </Fragment>
    );
  }

  console.log(activeStep);
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
      />
    );

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </Fragment>
  );
};

export default Checkout;
