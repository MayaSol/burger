import React, {useEffect} from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {

  useEffect(()=>{
    console.log('[Burger.js] component rendered');
  })

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // console.log(igKey);
      // console.log(props.ingredients[igKey]);
      // console.log(...Array(props.ingredients[igKey]));
      // console.log([...Array(props.ingredients[igKey])]);
      return [...Array(props.ingredients[igKey])].map((_,i) =>
        <BurgerIngredient key={igKey + i} type={igKey} />
      );
    })
    .reduce((arr,el) => {
      return arr.concat(el);
    },[]);

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );

}

export default Burger;
