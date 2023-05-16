import logo from './logo.svg';
import './App.css';


import { Component } from 'react';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
        {
      name: {firstName: 'Mickey',LastName:'Singh'},
          company:'Crack Logic'
        }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi {this.state.name.firstName } {this.state.name.LastName }, I work at {this.state.company}
            </p>
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name:{firstName:'Mckyle', LastName:'Siiingh'}
                }
              },
                () => { 
                  console.log(this.state);//this is a callback to make sure console is uupdated after the state is updated
              });
              
           }}>
              Change name
            </button>
        </header>
      </div>
    );
  }
}

export default App;
