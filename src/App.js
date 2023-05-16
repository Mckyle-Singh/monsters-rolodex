import logo from './logo.svg';
import './App.css';


import { Component } from 'react';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      Monster1: {
        name: 'Linda',
      },

      Monster2: {
        name: 'Frank',
      },

      Monster3: {
        name: 'Jacky',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.Monster1.name}</h1>
        <h1>{this.state.Monster2.name}</h1>
        <h1>{this.state.Monster3.name}</h1>
      </div>
    );
  }
}

export default App;
