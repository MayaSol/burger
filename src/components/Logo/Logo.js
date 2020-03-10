import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => {

  const classnames = [classes.Logo];
  if (props.addclass) {
    classnames.push(props.addclass);
  }

  return (
    <div className={classnames.join(' ')}>
      <img src={burgerLogo} alt='MyBurger'/>
    </div>
  );

}

export default Logo;
