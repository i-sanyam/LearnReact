import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const style = {backgroundColor: 'blue', color: 'white'};
  return (
  <div>
    <label className = "label" htmlFor = "name">
      Enter Name
    </label>
    <input id = "name"/>
    <button style= {style}>Submit</button>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}