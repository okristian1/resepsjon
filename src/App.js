import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Informasjons organisering</h2>
        </div>
        <br/><br/>
        <Form />
      </div>
    );
  }
}




export default App;
