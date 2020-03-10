import React from 'react';

import classes from './Hamburger.module.css';
const Hamburger = props => {

  return (
    <div className={classes.Hamburger} onClick = {props.clicked}>
      <span></span>
    </div>
  );

}

export default Hamburger;
