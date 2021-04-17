import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition((geoPosition) => {
      this.setState({ lat: geoPosition.coords.latitude });
    }, console.error);
  }
  render() {
    return (
      <div>
        Hello World!
        <br/>
      Latitude: {this.state.lat}
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));