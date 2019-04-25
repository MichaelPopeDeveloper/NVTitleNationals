import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Home/Home';
import HomeInit from './HomeInit/HomeInit';
import Brackets from './Brackets/Brackets';
import Menu from './Menu/Menu';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }



  componentWillMount() {
 
  }


  render = () => {
    return (
      <Router>
        <Menu />
        <Route exact path='/' component={HomeInit} />
        <Route  exact path="/home" component={Home} />
        {/* <Route component={Home} /> */}
      </Router>
    );
  }
}

export default Routes;
