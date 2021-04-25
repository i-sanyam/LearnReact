import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { imageArray: [] };
  onSearchSubmit = async searchQuery => {
    try {
      const response = await unsplash.get('/search/photos', {
        params: {
          query: searchQuery
        }
      });
      this.setState({ imageArray: response.data.results });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div className='ui container' style={{ 'marginTop': '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imageArray} />
        Found {this.state.imageArray.length} images
      </div>
    );
  }
}

export default App;