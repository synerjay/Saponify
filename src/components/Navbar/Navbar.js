import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
        <Typography component={Link} to='/' className={classes.link}>
          {/* Logo Website here */}
          <img src={logo} alt='Jayshop' height='25px' className='h-7 w-7' />
          Jayshop
        </Typography>
        <div className={classes.grow} />
        {/* This self-closing div is to take as much space as we need */}
        {location.pathname === '/cart' ||
        location.pathname === '/checkout' ? null : (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to='/cart'
              aria-label='Show car items'
              color='inherit'
            >
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
