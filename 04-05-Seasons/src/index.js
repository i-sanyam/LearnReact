import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  render() {
  window.navigator.geolocation.getCurrentPosition(console.log, console.log);
  return (
    <div>
      Hello World!
      <SeasonDisplay />
    </div>
  );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));