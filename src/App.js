import logo from './logo.svg';
import './App.css';


import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[
      
        {
          name: 'Linda',
          id: '12e11231e',

        },
    
        {
          name: 'Frank',
          id: '12ed2dacas',
        },
    
        {
          name: 'Jacky',
          id: '1231e',
        },

        {
          name: 'Mickey',
          id: '12e1e213',
        },

      ]
    };
  }


      
  

  render() {
    return (
      <div className="App">
        
        {
          this.state.monsters.map((monster) => {
              return(
              <div key={monster.id}>
                <h1>{monster.name}</h1>
                </div>
              );
           })
        }
      </div>
    );
  }
}

export default App;
