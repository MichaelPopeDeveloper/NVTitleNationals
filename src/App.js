import React, { Component } from 'react';
import Routes from './Components/Routes';
import Menu from './Components/Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes />
      </div>
    );
  }
}

export default App;
