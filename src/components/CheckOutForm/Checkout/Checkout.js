import useStyles from './styles';
import {
  Button,
  CircularProgress,
  CssBaseline,
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
import { Link, useHistory } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0); // 0 is AddressForm, 1 is PaymentForm
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();
  console.log(error);

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
      } catch (err) {
        if (activeStep !== steps.length) history.pushState('/');
        console.log(err);
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

  let Confirmation = () =>
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
            Please check your email for more information about the estimated
            delivery times.
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
        <Typography variant='h6'>
          Oops! There was something wrong with the transaction: <br />
          <strong>{error}</strong>
          <br />
        </Typography>
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
      <CssBaseline />
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
