import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {

  state = {
    sideDrawerShow: false
  }

  sideDrawerClosedHandler = () => {
      this.setState({
        sideDrawerShow: false
      });
  }

  sideDrawerToggleClicked = () => {
    this.setState(
      (prevState,props) => {
        return {sideDrawerShow: !prevState.sideDrawerShow}
      }
    );
  }

  render() {
    return (
    <Aux>
      <Toolbar sideDrawerShow={this.state.sideDrawerShow} sideDrawerToggle = {this.sideDrawerToggleClicked} />
      <SideDrawer show={this.state.sideDrawerShow} close={this.sideDrawerClosedHandler}/>
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>)
  }
};

export default Layout;

