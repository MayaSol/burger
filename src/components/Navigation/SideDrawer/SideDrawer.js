import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';



const SideDrawer = props => {

  let classnames = [classes.SideDrawer];

  if (!props.show) {
    classnames.push(classes.Close);
  }

  return (
    <Aux>
      <Backdrop show = {props.show} clicked = {props.close}/>
      <div className = {classnames.join(' ')}>
        <Logo addclass={classes.Logo}/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      </Aux>
  );
}

export default SideDrawer;
