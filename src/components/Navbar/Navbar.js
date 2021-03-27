import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
        <Typography>
          {/* Logo Website here */}
          <img
            src={logo}
            alt='Jayshop'
            height='25px'
            className={classes.image}
          />
          Jayshop
        </Typography>
        <div className={classes.grow} />
        {/* This self-closing div is to take as much space as we need */}
        <div className={classes.button}>
          <IconButton aria-label='Show car items' color='inherit'>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
