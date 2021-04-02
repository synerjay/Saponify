import { Button, Divider, Typography } from '@material-ui/core';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { Fragment } from 'react';
import Review from './Review';

const stripePromise = loadStripe('...');

// We use Stripe.js to use the credit card payments
const PaymentForm = ({ checkoutToken, backStep }) => {
  return (
    <Fragment>
      {/* Put review component here */}
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        {' '}
        Payment Method{' '}
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='outlined' onClick={backStep}>
                  Back
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={!stripe}
                  color='primary'
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </Fragment>
  );
};

export default PaymentForm;
