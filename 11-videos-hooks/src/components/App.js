import React, { useState } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const videoState = useState({
    videos: [],
    selectedVideo: null
  });
  componentDidMount() {
    this.onSearchSubmit('trending');
  }
  onSearchSubmit = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items && response.data.items[0]
    });
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }
  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={this.onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;