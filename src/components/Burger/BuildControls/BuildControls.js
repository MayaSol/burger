import React, {useEffect} from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

// const controls = [
//   {label: 'Salad', type: 'salad'},
//   {label: 'Bacon', type: 'bacon'},
//   {label: 'Cheese', type: 'cheese'},
//   {label: 'Meat', type: 'meat'},
// ];


const controlLabels = {
  salad: {label: 'Salad'},
  bacon: {label: 'Bacon'},
  cheese: {label: 'Cheese'},
  meat: {label: 'Meat'}
};

const BuildControls = props => {

  useEffect(()=> {
    console.log('[BuildControls.js] rendered')
  })


  const buildControls = Object.keys(controlLabels)
    .map((igKey,i) => {
      return <BuildControl
                key = {igKey}
                ingredient = {igKey}
                label = {controlLabels[igKey].label}
                disabled = {props.disabled[igKey]}
                add={props.add}
                remove = {props.remove}
              />
    });

  return (
    <div className = {classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {buildControls}
      <button
        className = {classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.ordered}>
        ORDER NOW
      </button>
    </div>
  );

}

export default React.memo(BuildControls);
