import React, {useEffect, Component} from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';

import Backdrop from '../Backdrop/Backdrop';

const Modal = props =>  {

  // С React.memo и functional class это не работает. ???
  // Потому что внутри есть OrderSummary, который получает изменяемые ingredients
  // Но можно добавить второй аргумент в memo - ф-цию, в которой производить сранвение вручную
  useEffect(() => {
      console.log('[Modal.js] rendered');
    });

  // componentDidUpdate() {
  //   console.log('[Modal.js] rendering');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.modalClosed === nextProps.modalClosed) {
  //     console.log('modalClosed ====');
  //   }
  //   else {
  //     console.log('modalClosed !==');
  //   };
  //   if (nextProps.show !== this.props.show) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

    return(
      <Aux>
        <Backdrop show = {props.show} clicked = {props.modalClosed}/>
        <div className = {classes.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}>
          {props.children}
        </div>
      </Aux>
    )

}

  function areEqual(prevProps, nextProps) {
    return prevProps.show == nextProps.show;
  }

export default React.memo(Modal,areEqual);
