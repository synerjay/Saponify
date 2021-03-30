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
  // need useState hoo khere for shipping Countries and shit
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
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivisions</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Fragment>
  );
};

export default AddressForm;
