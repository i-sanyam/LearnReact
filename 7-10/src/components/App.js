import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar.js'

class App extends React.Component {
  state = { imageArray: [] };
  onSearchSubmit = async searchQuery => {
    console.log(searchQuery);
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID czkk0Ad5r44tL-3WLfsnO1I7X_yTVw6GfTcIYEcXpnw'
        },
        params: {
          query: searchQuery
        }
      });
      console.log(response.data.results);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div className='ui container' style={{ 'marginTop': '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;