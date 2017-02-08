import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Informasjons organisering</h2>
        </div>
        <br/><br/>
        <Form />
        <Item />
      {this.props.myArray}
      </div>
    );
  }
}

class Item extends Component {
  render(){
    return <div>{this.props.item}</div>;
  }
}





export default App;
