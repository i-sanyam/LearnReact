import React from 'react';
import unsplash from '../api/unsplash.js'
import SearchBar from './SearchBar.js'

class App extends React.Component {
  state = { imageArray: [] };
  onSearchSubmit = async searchQuery => {
    console.log(searchQuery);
    try {
      const response = await unsplash.get('/search/photos', {
        params: {
          query: searchQuery
        }
      });
      console.log(response.data.results);
      this.setState({imageArray: response.data.results});
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div className='ui container' style={{ 'marginTop': '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.imageArray.length} images
      </div>
    );
  }
}

export default App;