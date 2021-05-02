import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  onSearchSubmit = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });
    this.setState({ videos: response.data.items });
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;