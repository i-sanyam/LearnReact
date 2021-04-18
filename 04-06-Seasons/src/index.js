import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props) {
    console.log('I am inside constructor fn');
    super(props);
    this.state = { lat: null, errorMessage: null };
    window.navigator.geolocation.getCurrentPosition((geoPosition) => {
      this.setState({ lat: geoPosition.coords.latitude });
    }, (error) => {
      this.setState({ errorMessage: error.message })
    });
  }
  componentDidMount() {
    console.log('I am in componentDidMount fn')
  }
  componentDidUpdate() {
    console.log('I am in componentDidUpdate fn');
  }
  componentWillUnmount() {
    console.log('I am in componentWillUnmount fn');
  }
  render() {
    console.log("I am inside reder fn")
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          Latitude: {this.state.lat}
          <br />
          <SeasonDisplay />
        </div>
      );
    } else if (this.state.errorMessage) {
      return (
        <div>
          Error: {this.state.errorMessage}
          <br />
          <SeasonDisplay />
        </div>
      );
    }
    return <div>Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));