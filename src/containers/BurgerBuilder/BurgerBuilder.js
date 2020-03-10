import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';

import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  continueHandler = () => {
    alert('You continue!');
  }

  cancelHandler = () => {
    this.purchaseCancelHandler();
  }

  purchaseHandler = () => {
    this.setState(
        {
          purchasing: true
        }
    )
  }

  purchaseCancelHandler = () => {
    this.setState(
        {
          purchasing: false
        }
    )
  }

  calcPurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      },0);

      return sum > 0;

      //this.setState({purchasable: sum > 0})
  }


  changePrice = (prevPrice,type,sign) => {
    //!!! Проверить как работает в оригинальном примере без округления и есть ли ошибка ???
    //Странно, но там ошибки нет
    // const ingredientPrice = Math.floor(INGREDIENT_PRICES[type]*100);
    // const previous = Math.floor(prevPrice*100);
    // let totalPrice = Math.floor(previous + ingredientPrice*sign)/100;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const previous = prevPrice;
    let totalPrice = previous + ingredientPrice*sign;
    return totalPrice;
  }

  addIngredientHandler = (type) => {

    this.setState(
      (prevState, props) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = prevState.ingredients[type] + 1;
        const totalPrice = this.changePrice(prevState.totalPrice,type,1);
        // !!! Не уверена, что можно вызывать ф-цию с setState внутри setState ???
        // - нельзя, выдает ошибку update funtion must be pure
        // this.updatePurchaseState(ingredients);
        const purchasable = this.calcPurchaseState(ingredients);
        return { ingredients: ingredients,
                 totalPrice: totalPrice,
                 purchasable: purchasable };
       });
  }

  removeIngredientHandler = (type) => {

    this.setState(
      (prevState) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] > 0) {
          ingredients[type] = prevState.ingredients[type] - 1;
          const totalPrice = this.changePrice(prevState.totalPrice,type,-1);
          const purchasable = this.calcPurchaseState(ingredients);
          return { ingredients: ingredients,
                   totalPrice: totalPrice,
                   purchasable: purchasable };
        }
      });
  }

  componentDidMount() {
    console.log('[BurgerBuilder.js] component rendered');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    };
    return (
      <Aux>
        <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
           <OrderSummary
          ingredients = {this.state.ingredients}
          continue = {this.continueHandler}
          cancel = {this.cancelHandler}
          price = {this.state.totalPrice}/>
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabled = {disabledInfo}
          purchasable = {this.state.purchasable}
          ordered = {this.purchaseHandler}
          price = {this.state.totalPrice}/>
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;
