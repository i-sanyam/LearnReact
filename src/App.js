import React from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1, 
        task: "Laundry"
      },
      {
        id: 2, 
        task: "Dishes"
      },
    ]
  };

  render() {
    return (
      <div className="App">
        {/* <h1>Hello World</h1> */}
        <ToDo todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
