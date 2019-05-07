import React from 'react';
import classes from './Toolbar.module.scss';
import Login from '../Login/Login';
import Logo from '../Logo/Logo';

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <Logo />
    <Login />
  </div>
)

export default toolbar;