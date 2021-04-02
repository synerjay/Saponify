import { Button, Divider, Typography } from '@material-ui/core';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';
import React, { Fragment } from 'react';
import Review from './Review';

// We use Stripe.js to use the credit card payments
const PaymentForm = () => {
  return (
    <Fragment>
      {/* Put review component here */}
      <Review />
    </Fragment>
  );
};

export default PaymentForm;
