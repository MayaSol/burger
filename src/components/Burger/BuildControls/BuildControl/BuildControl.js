import React, { Component, useEffect, useContext, useState } from 'react';

import classes from './BuildControl.module.css';
//import IngredientsContext from '../../../../context/ingredients-context';

  const BuildControl = props => {

    //Как сделать, чтобы компонент не ре-рендерился, если props не изменились? В частности props.disabled?


    //const ingredientsContext = useContext(IngredientsContext);

    // const [controlDisabled, setControlDisabled] = useState(
    //   {disabled: props.disabled},
    // );

    // console.log(controlDisabled);

    // setControlDisabled({disabled: props.disabled});

    useEffect(() => {
      console.log('[BuildControl.js] rendered');
      // console.log(props);
    });

    // static contextType = IngredientsContext;

    // componentDidMount() {
    //   console.log('[BuildControl.js] componentDidMount');
    // }

    return (
      <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less} onClick = {() => props.remove(props.ingredient)} disabled={props.disabled}>Less</button>
        <button className = {classes.More} onClick = {() => props.add(props.ingredient)}>More</button>
      </div>
    );

  }

  function areEqual(prevProps,nextProps) {
    return prevProps.disabled === nextProps.disabled;
  };

export default React.memo(BuildControl,areEqual);
