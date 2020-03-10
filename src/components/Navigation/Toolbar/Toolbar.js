import React from 'react';

import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../UI/Hamburger/Hamburger';

const Toolbar = props => {
  return (
    <header className = {classes.Toolbar}>
      <Hamburger clicked = {props.sideDrawerToggle}/>
      <Logo addclass = {classes.Logo}/>
      <nav className = {classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );

};

export default Toolbar;
