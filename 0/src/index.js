import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
  <div>
    <label for = "name">Enter Name</label>
    <input id = "name"/>
    <button style= {{backgroundColor: 'blue', color: 'white'}}>Submit</button>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}