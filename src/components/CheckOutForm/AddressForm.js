import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken }) => {
  // need useState hoo khere for shipping Countries and shit
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivion, setShippingSubdivion] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
    // Object.keys(object) returns an array of Keys
  };

  // Component to mount so that it fetches the available countries from Commerce.js server

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <Fragment>
      {/* <Typography variant='h6' gutterBottom>
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
      </FormProvider> */}
    </Fragment>
  );
};

export default AddressForm;
