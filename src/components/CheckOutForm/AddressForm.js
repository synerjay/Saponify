import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './CustomTextField';

const AddressForm = () => {
  const methods = useForm();

  return (
    <Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First name' />
            <FormInput required name='lastName' label='Last name' />
            <FormInput required name='address1' label='Address' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='city' label='City' />
            <FormInput required name='postal' label='ZIP / Postal Code' />
          </Grid>
        </form>
      </FormProvider>
    </Fragment>
  );
};

export default AddressForm;
