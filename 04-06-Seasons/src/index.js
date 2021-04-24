import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  state = { lat: null, errorMessage: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((geoPosition) => {
      this.setState({ lat: geoPosition.coords.latitude });
    }, (error) => {
      this.setState({ errorMessage: error.message })
    });
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          {/* Latitude: {this.state.lat}
          <br /> */}
          <SeasonDisplay lat={this.state.lat}/>
        </div>
      );
    } else if (this.state.errorMessage) {
      return (
        <div>
          Error: {this.state.errorMessage}
          <br />
        </div>
      );
    }
    return <div><i className="icon spinner" /></div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));